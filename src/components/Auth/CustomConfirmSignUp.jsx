import React from "react";
import { Auth } from "aws-amplify";
import { toast } from "react-toastify";

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

const CustomConfirmSignUp = ({
  inputs,
  handleFormInput,
  authState,
  onStateChange
}) => {
  const { username, code } = inputs;
  // const [formData, setFormData] = useState({ ...InitialData });
  const classes = useStyles();

  const verification = async e => {
    e.preventDefault();
    // After retrieving the confirmation code from the user
    try {
      await Auth.confirmSignUp(username, code, {
        // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true
      });
      onStateChange("signIn", {});
      toast.success("Email confirmado!", { autoClose: 2500 });
    } catch (error) {
      toast.error("Código invalido", { autoClose: 2000 });
      console.log(error);
    }
  };

  const reSendCode = async () => {
    try {
      await Auth.resendSignUp(username);
      toast.info("Código reenviado para o email", { autoClose: 2000 });
    } catch (error) {
      toast.error("Erro ao enviar Código", { autoClose: 2500 });
      console.log(error);
    }
  };

  return (
    authState === "confirmSignUp" && (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Confirmar Código
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
                key="code"
                id="code"
                label="Código"
                name="code"
                value={code}
                onChange={handleFormInput}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => verification(e)}
          >
            Confirmar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              Perdeu o código?
              <Link href="#" variant="body2" onClick={reSendCode}>
                Reenvie
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  );
};

export default CustomConfirmSignUp;
