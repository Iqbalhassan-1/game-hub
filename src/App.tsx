import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px wider
      }}
    >
      <GridItem area="nav" bg="coral">
        nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
