import React from "react";
import SingleProduct from "./SingleProduct";

import Grid from "@material-ui/core/Grid";

const SearchResult = ({ searchResults }) => {
  console.log(searchResults);
  return searchResults.length > 0 ? (
    <Grid container spacing={1}>
      {searchResults.map((p, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <SingleProduct key={i} product={p} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <p>Produto não encontrado</p>
  );
};

export default SearchResult;
