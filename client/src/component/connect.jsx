import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios";
import { getAllContacts } from "../redux/action";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function mapStateToProps(state) {
  return { contactsList: state.contacts.contactsList };
}

const defaultTheme = createTheme();

export default connect(mapStateToProps)(function SignIn(props) {
  const { contactsList, dispatch } = props
  const newNavigate = useNavigate()

  const getAllContactsList = async () => {
    try {

      const response = await axios.get('http://localhost:8000/contact/')
      if (response.status == 200) {
        dispatch(getAllContacts(response.data))
      }
    }
    catch (error) {
      console.log("oops")
    }
  }
  useEffect(() => {
    getAllContactsList()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const idUser = data.get('password');
    if (contactsList.find(num => num.id === data.get('password'))) {
      alert(`hello ${data.get('name')}`)
      newNavigate('/presentationTasks', { state: { idUser } })
    }
    else {
      alert(`oops... you are not founds`)
      newNavigate('/login')
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="./login" variant="body2">
                  {"Don't have an account?    Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
});
