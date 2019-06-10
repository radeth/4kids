import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  makeStyles,
  Button,
  Grid
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import bgSecondary from "./../img/steven-libralon-570406-unsplash (1).jpg";

const useStyles = makeStyles(theme => ({
  bgSecondary: {
    background: `url("${bgSecondary}") no-repeat fixed center`,
    textAlign: "center"
  },
  searchInput: {
    backgroundColor: "white"
  }
}));
export default function Search() {
  const styles = useStyles();
  return (
    <div className={styles.bgSecondary}>
      <Grid container>
        <Grid xs={6} item>
          <Typography variant="h1" align="left">
            Zajecia dla dzieci w całej polsce
          </Typography>
          <Typography variant="h4" align="left">
            Przeszukaj zajecia
          </Typography>
        </Grid>
        <Grid  xs={7} item>
          <div m={1} className={styles.searchInput}>
            <InputBase placeholder="Search…" />
            <SearchIcon />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
