import React from "react";
import { Auth } from "aws-amplify";
import { toast } from "react-toastify";
import { map } from "../../utils/amplifyLang";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const CustomSignUp = ({
  authState,
  onStateChange,
  inputs,
  handleFormInput
}) => {
  const { username, email, password, phone_number } = inputs;
  const classes = useStyles();

  const signUp = async e => {
    e.preventDefault();
    const phone_brazil = `+55${phone_number}`;
    try {
      const res = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          phone_number: phone_brazil // optional - E.164 number convention
          // other custom attributes
        },
        validationData: [] //optional
      });

      onStateChange("confirmSignUp", {});
      toast.success("Código enviado para o email cadastrado");
    } catch (error) {
      console.log(error);
      if (error.message) {
        toast.error(`${map(error.message)}`);
      } else {
        toast.error(`${map(error)}`);
      }
    }
  };

  return (
    authState === "signUp" && (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastrar
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Usuário"
                autoFocus
                key="username"
                value={username}
                onChange={handleFormInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                type="number"
                required
                fullWidth
                key="phone_number"
                id="phone_number"
                label="Telefone com DDD"
                name="phone_number"
                value={phone_number}
                onChange={handleFormInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                type="email"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                key="email"
                value={email}
                onChange={handleFormInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                key="password"
                value={password}
                onChange={handleFormInput}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            disabled={!username || !phone_number || !password || !email}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => signUp(e)}
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => onStateChange("signIn", {})}
              >
                Já tem um conta? Entrar
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  );
};

export default CustomSignUp;
