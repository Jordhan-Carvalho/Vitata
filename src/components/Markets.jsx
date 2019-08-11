import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listMarkets } from "../graphql/queries";
import SingleMarket from "./SingleMarket";

import Grid from "@material-ui/core/Grid";

const Markets = () => {
  const [markets, setMarkets] = useState(null);

  useEffect(() => {
    getMarkets();
  }, []);

  const getMarkets = async () => {
    const { data } = await API.graphql(graphqlOperation(listMarkets));
    console.log(data);
    setMarkets(data.listMarkets.items);
  };
  console.log(markets);
  return (
    markets && (
      <Grid container spacing={1}>
        {markets.map((m, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <SingleMarket key={i} market={m} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Markets;
