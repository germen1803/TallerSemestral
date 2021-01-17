import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function GroupedSelect() {
    const [libroSeleccionado, setLibroSeleccionado] = useState(0);
    const [libros,setLibros] = useState([])
    const classes = useStyles();

    useEffect(() => {
        cargarLibros()
    }, []);

    function cargarLibros()
    {
        axios.get("http://localhost:9000/api/libro").then(
        (response) => {
            setLibros(response.data);
            console.log(response.data);
        },
        (error) => {
        alert("error");
        }
        );
    }


    return (
        <div>
            <Typography component="h1" variant="h5">
                Registro de Prestamo
            </Typography>
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Libro</InputLabel>
            <Select
            native
            defaultValue=""
            id="grouped-native-select"
            value={libroSeleccionado}
            labelWidth={"Libro"}
            margin="dense">
            <option aria-label="None" value="" />
                <option value={1}>Option 1</option>
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-select">Usuario</InputLabel>
            <Select defaultValue="" id="grouped-select">
            <MenuItem selected={true} key={1} value={0}>
                <em>Seleccione Libro</em>
            </MenuItem>
            <MenuItem value={1}>Option 1</MenuItem>
                </Select>
            </FormControl>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Registrar Prestamo
            </Button>
        </div>
    );
}