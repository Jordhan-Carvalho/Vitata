import React from "react";
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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const InfoGeral = ({
  onChange,
  formData: {
    price,
    description,
    district,
    title,
    condition,
    category,
    shipped,
    quantity,
    isUploading
  },
  handleFile,
  filesArray
}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Informações Gerais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type-simple">Condição *</InputLabel>
            <Select
              required
              value={condition}
              onChange={e => onChange(e)}
              inputProps={{
                name: "condition",
                id: "condition-simple"
              }}
            >
              <MenuItem value="">
                <em />
              </MenuItem>
              <MenuItem value="Novo">Novo</MenuItem>
              <MenuItem value="Usado">Usado</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Preço"
            value={price}
            onChange={e => onChange(e)}
            helperText="Número Inteiro ex:1500"
            fullWidth
            // autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="Título"
            fullWidth
            // autoComplete="billing address-line1"
            value={title}
            onChange={e => onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Descrição"
            helperText="Mais informações sobre o produto"
            fullWidth
            value={description}
            onChange={e => onChange(e)}
          />
        </Grid>

        <Grid item xs={8} sm={7}>
          <TextField
            required
            id="district"
            name="district"
            label="Bairro"
            fullWidth
            autoComplete="billing address-line1"
            helperText="Bairro onde está localizado o produto"
            value={district}
            onChange={e => onChange(e)}
          />
        </Grid>
        <Grid item xs={4} sm={5}>
          <TextField
            required
            id="quantity"
            name="quantity"
            label="Quantidade"
            fullWidth
            value={quantity}
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
        <Grid item xs={5} sm={5}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="shipped-required">Forma de envio *</InputLabel>
            <Select
              required
              value={shipped}
              onChange={e => onChange(e)}
              inputProps={{
                name: "shipped",
                id: "shipped-required"
              }}
            >
              <MenuItem value="">
                <em />
              </MenuItem>
              <MenuItem value="Retirar no local">Retirar no local</MenuItem>
              <MenuItem value="Entrega na residência">
                Entrega na residência
              </MenuItem>
              <MenuItem value="Entrega em local público">
                Entrega em local público
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          {isUploading ? (
            <CircularProgress />
          ) : (
            <>
              {" "}
              <input
                accept="image/*"
                id="raised-button-file"
                style={{ display: "none" }}
                multiple
                type="file"
                onChange={handleFile}
              />
              <label htmlFor="raised-button-file">
                <Button
                  raised="true"
                  component="span"
                  variant="contained"
                  color={!filesArray ? "default" : "primary"}
                  className={classes.button}
                >
                  Imagens *
                  <CloudUploadIcon className={classes.rightIcon} />
                </Button>
              </label>
              <p>Máximo de 5 imagens</p>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default InfoGeral;
