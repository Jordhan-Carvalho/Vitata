import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { productsByDate } from "../graphql/queries";
import SingleProduct from "./SingleProduct";
import { listMarkets } from "../graphql/queries";
import SingleMarket from "./SingleMarket";
import Spinner from "./Spinner";

//Apollo
import { withApollo } from "react-apollo";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const ItemContainer = ({ type, client }) => {
  const [products, setProducts] = useState(null);
  const [markets, setMarkets] = useState(null);
  const [nextToken, setNextToken] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getProducts();
    getMarkets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProducts = async () => {
    const { data, loading } = await client.query({
      query: productsByDate,
      variables: {
        queryName: "Product",
        sortDirection: "DESC",
        limit: 4
      }
      // fetchPolicy: "network-only"
    });

    // const { data } = await API.graphql(
    //   graphqlOperation(listProducts, { limit: 8 })
    // );
    setNextToken(data.productsByDate.nextToken);
    setProducts(data.productsByDate.items);
  };

  const getMarkets = async () => {
    const { data, loading } = await client.query({
      query: listMarkets
    });
    // const { data } = await API.graphql(graphqlOperation(listMarkets));
    setMarkets(data.listMarkets.items);
  };

  const fetchMoreProducts = async () => {
    const { data } = await API.graphql(
      graphqlOperation(productsByDate, {
        queryName: "Product",
        sortDirection: "DESC",
        limit: 4,
        nextToken
      })
    );
    if (data.productsByDate.nextToken === null) {
      setNextToken(data.productsByDate.nextToken);
      setProducts([...products, ...data.productsByDate.items]);
      return setDisabled(true);
    }
    setNextToken(data.productsByDate.nextToken);
    setProducts([...products, ...data.productsByDate.items]);
  };

  const renderItems = () => {
    if (type === 0) {
      return products.map((p, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <SingleProduct key={i} product={p} />
        </Grid>
      ));
    } else if (type === 1) {
      return markets.map((m, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <SingleMarket key={i} market={m} />
        </Grid>
      ));
    }
  };

  return products ? (
    <Grid container spacing={1}>
      {renderItems()}
      <Grid item xs={12}>
        <Button
          disabled={disabled}
          onClick={fetchMoreProducts}
          variant="contained"
          size="large"
          color="primary"
        >
          Carregar mais...
        </Button>
      </Grid>
    </Grid>
  ) : (
    <Spinner />
  );
};

export default withApollo(ItemContainer);
