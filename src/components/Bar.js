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
import QuestionIcon from "@material-ui/icons/ContactSupport";
import Person from "@material-ui/icons/Person";
import logo from "./../img/logo.png";

const useStyles = makeStyles(theme => ({
  bar: {
    backgroundColor: "white"
  },
  img: {
    height: "auto",
    width: "100%"
  },
  searchButton: {
    backgroundColor: "orange",
    width: "100%"
  },
  questionIcon: {
    color: "silver"
  },
  personIcon: {
    color: "green"
  },
  logOutButton: {
    color: "orange",
    textDecoration: "none"
  }
}));
export default function Bar() {
  const styles = useStyles();
  return (
    <div>
      <AppBar className={styles.bar} position="static">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <a href="#">
                <img src={logo} alt="logo" className={styles.img} />
              </a>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" className={styles.searchButton}>
                <SearchIcon className={styles.searchIcon} />
                <Typography variant="button">Wyszukaj</Typography>
              </Button>
            </Grid>
            <Grid item xs={1}>
              <a href="#">
                <QuestionIcon className={styles.questionIcon} />
              </a>
            </Grid>
            <Grid item xs={1}>
              <a href="#">
                <Person className={styles.personIcon} />
              </a>
            </Grid>
            <Grid item xs={1}>
              <Typography>
                <a className={styles.logOutButton} href="#">
                  {" "}
                  Wyloguj się{" "}
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
