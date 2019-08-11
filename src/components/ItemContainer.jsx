import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../graphql/queries";
import SingleProduct from "./SingleProduct";
import { listMarkets } from "../graphql/queries";
import SingleMarket from "./SingleMarket";

import Grid from "@material-ui/core/Grid";

const ItemContainer = ({type}) => {
  const [products, setProducts] = useState(null);
  const [markets, setMarkets] = useState(null);

  useEffect(() => {
    getProducts();
    getMarkets();
  }, []);

  const getProducts = async () => {
    const { data } = await API.graphql(graphqlOperation(listProducts));
    console.log(data);
    setProducts(data.listProducts.items);
  };

  const getMarkets = async () => {
    const { data } = await API.graphql(graphqlOperation(listMarkets));
    console.log(data);
    setMarkets(data.listMarkets.items);
  };

  const renderItems = () => {
    if (type === 0) {
     return (products.map((p, i) => (
      <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
        <SingleProduct key={i} product={p} />
      </Grid>
    )))} else if (type === 1) {
      return (
        markets.map((m, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <SingleMarket key={i} market={m} />
          </Grid>
        ))
      )
    }

  }

  return (
    products && (
      <Grid container spacing={1}>
        {renderItems()}
      </Grid>
    )
  );
};

export default ItemContainer;