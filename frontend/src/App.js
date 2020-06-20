import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./components/Topnav";
import { Grid } from "@material-ui/core";
import TopViewHome from "./components/TopViewHome";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item>
          <PrimarySearchAppBar />
        </Grid>
        <Grid item>
          <TopViewHome />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
