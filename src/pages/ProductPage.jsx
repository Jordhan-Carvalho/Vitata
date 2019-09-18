import React, { useState, useEffect } from "react";
// import { API, graphqlOperation } from "aws-amplify";
//Apollo
import { withApollo } from "react-apollo";

import Carousel from "../components/Carousel";
import { getProduct } from "../graphql/queries";
import Spinner from "../components/Spinner";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Help from "@material-ui/icons/Help";
import Lock from "@material-ui/icons/Lock";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    marginBottom: 5
  },
  paperSoft: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  subText: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ProductPage = ({
  match: {
    params: { id }
  },
  user,
  client
}) => {
  const [product, setProduct] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProduct = async () => {
    try {
      const { data, loading } = await client.query({
        query: getProduct,
        variables: {
          id
        }
      });

      setProduct(data.getProduct);
      // const { data } = await API.graphql(graphqlOperation(getProduct, { id }));

      // setProduct(data.getProduct);
    } catch (error) {
      console.log(error);
    }
  };

  return product ? (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
        </Paper>
      </Grid>
      {/* Right pane */}
      <Grid item xs={12} sm={8}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Carousel files={product.files} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Descrição
            </Typography>
            <Typography variant="body2" gutterBottom>
              {product.description}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Perguntas
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* Left pane */}
      <Grid item xs={12} sm={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              {product.title}
            </Typography>
            <Typography
              className={classes.subText}
              variant="body2"
              gutterBottom
            >
              {product.condition}
            </Typography>
            <Typography className={classes.paper} variant="h5" gutterBottom>
              R$ {product.price}
            </Typography>
            <Fab
              variant="extended"
              color="primary"
              aria-label="add"
              className={classes.margin}
            >
              <Lock className={classes.extendedIcon} />
              COMPRA PROTEGIDA
            </Fab>
            <div>
              <Help />
            </div>

            <Typography
              className={classes.paperSoft}
              variant="body2"
              gutterBottom
            >
              <strong>Quantidade</strong>: {product.quantity}
            </Typography>
            <Divider />
            <Typography
              className={classes.paperSoft}
              variant="body2"
              gutterBottom
            >
              <strong>Categoria</strong>: {product.category}
            </Typography>
            <Typography
              className={classes.paperSoft}
              variant="body2"
              gutterBottom
            >
              <strong>Envio</strong>: {product.shipped}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>PRODUTOS RELACIONADOS</Paper>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Spinner />
  );
};

export default withApollo(ProductPage);
