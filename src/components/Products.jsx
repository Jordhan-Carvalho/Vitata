import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../graphql/queries";
import SingleProduct from "./SingleProduct";

import Grid from "@material-ui/core/Grid";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data } = await API.graphql(graphqlOperation(listProducts));
    console.log(data);
    setProducts(data.listProducts.items);
  };
  console.log(products);
  return (
    products && (
      <Grid container spacing={1}>
        {products.map((p, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <SingleProduct key={i} product={p} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Products;
