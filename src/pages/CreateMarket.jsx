import React, { useState } from "react";
import { Storage, Auth, API, graphqlOperation } from "aws-amplify";
import { toast } from "react-toastify";
import { createMarket } from "../graphql/mutations";
import config from "../aws-exports";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const initialState = {
  name: "",
  description: "",
  category: "",
  isUploading: false
};

const CreateMarket = ({ user, history }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({ ...initialState });
  const [fileBanner, updateFileBanner] = useState(null);
  const [fileDisplay, updateFileDisplay] = useState(null);

  const { name, description, category, isUploading } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e, type) => {
    const {
      target: { value, files }
    } = e;
    if (files[0].size > 2200000) {
      return toast.warning("Imagem não pode ser maior que 2mb", {
        autoClose: 2000
      });
    }
    if (type === "banner") {
      return updateFileBanner(files[0]);
    }
    if (type === "display") {
      return updateFileDisplay(files[0]);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    setFormData({ ...formData, isUploading: true });
    const { identityId } = await Auth.currentCredentials();

    try {
      const { name: fileBannerName, type: mimeBannerType } = fileBanner;
      const bannerKey = `markets/${name}/banner/${identityId}/${Date.now()}-${fileBannerName.replace(
        / +/g,
        ""
      )}`;
      const bannerUrl = `https://${bucket}.s3.${region}.amazonaws.com/public/${bannerKey}`;
      await Storage.put(bannerKey, fileBanner, {
        contentType: mimeBannerType
      });

      const { name: fileDisplayName, type: mimeDisplayType } = fileDisplay;
      const displayKey = `markets/${name}/display/${identityId}/${Date.now()}-${fileDisplayName.replace(
        / +/g,
        ""
      )}`;
      const displayUrl = `https://${bucket}.s3.${region}.amazonaws.com/public/${displayKey}`;
      await Storage.put(displayKey, fileDisplay, {
        contentType: mimeDisplayType
      });

      const input = {
        name,
        description,
        category,
        banner: bannerUrl,
        displayImage: displayUrl,
        owner: user.attributes.sub
      };

      const res = await API.graphql(graphqlOperation(createMarket, { input }));
      console.log(res);
      toast.success("😄 Loja criada com sucesso!", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`, { autoClose: 2000 });
    }

    setFormData({ ...initialState });
    updateFileBanner("");
    updateFileDisplay("");
    history.push("/");
  };

  return (
    user && (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Loja
          </Typography>

          <Typography variant="h6" gutterBottom>
            Informações Gerais
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                label="Nome"
                fullWidth
                // autoComplete="billing address-line1"
                value={name}
                onChange={e => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Descrição"
                helperText="Breve descrição da sua loja"
                fullWidth
                value={description}
                onChange={e => onChange(e)}
              />
            </Grid>

            <Grid item xs={7} sm={7}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="category-simple">Categoria *</InputLabel>
                <Select
                  required
                  value={category}
                  onChange={e => onChange(e)}
                  inputProps={{
                    name: "category",
                    id: "category-simple"
                  }}
                >
                  <MenuItem value="">
                    <em />
                  </MenuItem>
                  <MenuItem value="Beleza e Cuidado Pessoal">
                    Beleza e Cuidado Pessoal
                  </MenuItem>
                  <MenuItem value="Casa e eletrodomésticos">
                    Casa e eletrodomésticos
                  </MenuItem>
                  <MenuItem value="Eletrônico">Eletrônico</MenuItem>
                  <MenuItem value="Esporte e Lazer">Esporte e Lazer</MenuItem>
                  <MenuItem value="Ferramentas e Industrias">
                    Ferramentas e Industrias
                  </MenuItem>
                  <MenuItem value="Livros">Livros</MenuItem>
                  <MenuItem value="Móveis">Móveis</MenuItem>
                  <MenuItem value="Vestuário">Vestuário</MenuItem>
                  <MenuItem value="Veículos">Veículos</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              {isUploading ? (
                <CircularProgress />
              ) : (
                <>
                  <input
                    accept="image/*"
                    id="raised-button-file"
                    style={{ display: "none" }}
                    type="file"
                    onChange={e => handleFile(e, "banner")}
                  />
                  <label htmlFor="raised-button-file">
                    <Button
                      raised="true"
                      component="span"
                      variant="contained"
                      color={!fileBanner ? "default" : "primary"}
                      className={classes.button}
                    >
                      Banner *
                      <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                  </label>

                  <input
                    accept="image/*"
                    id="raised-button-file2"
                    style={{ display: "none" }}
                    type="file"
                    onChange={e => handleFile(e, "display")}
                  />
                  <label htmlFor="raised-button-file2">
                    <Button
                      raised="true"
                      component="span"
                      variant="contained"
                      color={!fileDisplay ? "default" : "primary"}
                      className={classes.button}
                    >
                      Display *
                      <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                  </label>
                </>
              )}
            </Grid>
          </Grid>

          <Button
            type="submit"
            disabled={
              !description ||
              !name ||
              !category ||
              !fileBanner ||
              !fileDisplay ||
              isUploading
            }
            variant="contained"
            color="primary"
            onClick={onSubmit}
            className={classes.button}
          >
            Criar
          </Button>
        </Paper>
      </main>
    )
  );
};

export default CreateMarket;
