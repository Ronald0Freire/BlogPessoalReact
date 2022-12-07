import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./cadastro.css";
import { cadastroUsuario } from "../../service/Service";
import User from "../../model/User";

function Cadastro () {

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id_usuario: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id_usuario: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id_usuario != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <>
        <Grid container justifyContent="center" alignContent="center" className="fullScreen">
        <Grid sm={6} item  className="loginStyle">
          <Typography variant="h3" align="center">Cadastre-se</Typography>
          <form>
            <TextField
              variant="outlined"
              label="Nome"
              fullWidth
              margin="normal"
            >
            </TextField>
            <Box className=""></Box>

            <TextField
              variant="outlined"
              label="E-mail"
              fullWidth
              margin="normal"
            >
            </TextField>
            <Box className=""></Box>

            <TextField
              variant="outlined"
              label="Senha"
              fullWidth
              margin="normal"
            >
            </TextField>
            <Box className=""></Box>

            <TextField
              variant="outlined"
              label="Confirmar Senha"
              fullWidth
              margin="normal"
            >
            </TextField>
            <Box className=""></Box>

            <Box display='flex' textAlign="center" justifyContent='space-around' mt={3}>
              <Link to='/' className="text-decorator-none">
                <Button variant="contained" color="primary">Cadastrar</Button>
              </Link>
            </Box>
          </form>
        </Grid>
      </Grid>



        </>
    )
}

export default Cadastro;