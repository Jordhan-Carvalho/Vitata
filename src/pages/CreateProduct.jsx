import React, { useState } from "react";
import { Storage, Auth, API, graphqlOperation } from "aws-amplify";
import { toast } from "react-toastify";
import { createProduct } from "../graphql/mutations";
import InfoGeral from "../components/InfoGeral";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import config from "../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config;

const useStyles = makeStyles(theme => ({
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

const steps = ["Informações Gerais"];

const initialState = {
  title: "",
  condition: "",
  description: "",
  district: "",
  category: "",
  quantity: "",
  price: "",
  shipped: false,
  isUploading: false
};

const CreateProduct = ({ user }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({ ...initialState });
  const [filesArray, setFilesArray] = useState(null);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = e => {
    const {
      target: { value, files }
    } = e;
    if (files.length > 5) {
      return toast.warning("Máximo de 5 imagens", { autoClose: 2000 });
    }
    let filesArr = [];
    for (let file of files) {
      if (files[0].size > 2200000) {
        return toast.warning("Imagem não pode ser maior que 2mb", {
          autoClose: 2000
        });
      }
      filesArr.push(file);
    }
    setFilesArray(filesArr || value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    setFormData({ ...formData, isUploading: true });
    const { identityId } = await Auth.currentCredentials();

    try {
      let filesForUpload = [];
      for (let file of filesArray) {
        const { name: fileName, type: mimeType } = file;
        const key = `${identityId}/${Date.now()}-${fileName.replace(
          / +/g,
          ""
        )}`;
        const fileForUpload = {
          bucket,
          key,
          region
        };
        filesForUpload.push(fileForUpload);
        await Storage.put(key, file, {
          contentType: mimeType
        });
      }

      const input = {
        title: formData.title,
        condition: formData.condition,
        description: formData.description,
        district: formData.district,
        category: formData.category,
        quantity: formData.quantity,
        price: formData.price,
        shipped: formData.shipped,
        files: filesForUpload
      };

      const res = await API.graphql(graphqlOperation(createProduct, { input }));
      console.log(res);
      toast.success("😄 Produto criado com sucesso!", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`, { autoClose: 2000 });
    }

    setFormData({ ...initialState });
    setFilesArray();
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <InfoGeral
            onChange={onChange}
            formData={formData}
            handleFile={handleFile}
            filesArray={filesArray}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    user && (
      <>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Produto
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <>
              {activeStep === steps.length ? (
                <></>
              ) : (
                <>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Voltar
                      </Button>
                    )}

                    <Button
                      disabled={
                        !filesArray ||
                        !formData.description ||
                        !formData.condition ||
                        !formData.title ||
                        !formData.district ||
                        !formData.shipped ||
                        !formData.price ||
                        !formData.quantity ||
                        formData.isUploading
                      }
                      variant="contained"
                      color="primary"
                      onClick={
                        activeStep === steps.length - 1 ? onSubmit : handleNext
                      }
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Criar" : "Próximo"}
                    </Button>
                  </div>
                </>
              )}
            </>
          </Paper>
        </main>
      </>
    )
  );
};

export default CreateProduct;
