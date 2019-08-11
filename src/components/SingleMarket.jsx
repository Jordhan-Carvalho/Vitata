import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import NewReleases from "@material-ui/icons/NewReleases";
import Avatar from "@material-ui/core/Avatar";
import LocalShipping from "@material-ui/icons/LocalShipping";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    marginBottom: 10,
    margin: 5
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const SingleMarket = ({ market }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={market.displayImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {market.name}
          </Typography>
          <div>
            <Chip
              color="primary"
              avatar={<Avatar>Produtos</Avatar>}
              label={market.products.length}
              className={classes.chip}
            />
          </div>
          <Chip
            color="primary"
            icon={<NewReleases />}
            label={market.owner}
            className={classes.chip}
          />
          <Chip
            color="primary"
            icon={<LocalShipping />}
            label={market.category}
            className={classes.chip}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Divider />
        <Button size="small" color="primary">
          <Link to={`/produto/${market.id}`}> Mais informações </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleMarket;
