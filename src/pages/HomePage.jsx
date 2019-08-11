import React, { useState } from "react";
import Products from "../components/Products";
import Markets from "../components/Markets";
import ItemContainer from "../components/ItemContainer";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Store from "@material-ui/icons/Store";
import LocalOffer from "@material-ui/icons/LocalOffer";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const HomePage = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const renderToggleItems = () => {
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          console.log(event);
          console.log(newValue);
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Products" icon={<LocalOffer />} />
        <BottomNavigationAction label="Markets" icon={<Store />} />
      </BottomNavigation>
    );
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12 HomePage</Paper>
        </Grid>
        <Grid item xs={12}>
          {renderToggleItems()}
          <Paper className={classes.paper}>
            <ItemContainer type={value} />
            {/* {value === 0 ? <Products /> : <Markets />} */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
