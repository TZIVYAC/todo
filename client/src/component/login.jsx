import * as React from 'react';
import { connect } from "react-redux";
import { addContact } from "../redux/action";
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios";
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
  return { contactsList: state.contacts.contactsList }
}

const defaultTheme = createTheme();

export default connect(mapStateToProps)(function SignUp(props) {
  const { contactsList, dispatch } = props
  const navigate = useNavigate()

  const addNewContact = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/contact/', { id: data.get('password'), name: data.get('name'), phone: data.get('phone'), email: data.get('email') })
      if (response.status == 200) {
        dispatch(addContact({ id: data.get('password'), name: data.get('name'), phone: data.get('phone'), email: data.get('email') }))
      }
    }
    catch (error) {
      console.log("oops")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addNewContact(data);
    dispatch(addContact({ id: data.get('password'), name: data.get('name'), phone: data.get('phone'), email: data.get('email') }))
    let idUser = data.get('password');
    alert(`hello ${data.get('name')}`);
    navigate('/presentationTasks', { state: { idUser } })
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./connect" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
});