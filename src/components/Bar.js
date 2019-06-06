import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  makeStyles,
  Button
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import QuestionIcon from "@material-ui/icons/ContactSupport";
import logo from "./../img/logo.png";

const mainOrangeColor = "orange";
const useStyles = makeStyles(theme => ({
  bar: {
    backgroundColor: "white"
  },
  img: {
    height: "auto",
    width: "20%"
  },
  searchButton: {
    backgroundColor: mainOrangeColor
  },
  questionIcon: {
    color: "silver"
  }
}));
export default function Bar() {
  const styles = useStyles();
  return (
    <div>
      <AppBar className={styles.bar} position="static">
        <Toolbar>
          <a src="#">
            <img src={logo} alt="logo" className={styles.img} />
          </a>
          <Button variant="contained" className={styles.searchButton}>
            <SearchIcon className={styles.searchIcon} />
            Wyszukaj
          </Button>
          <a>
            <QuestionIcon className={styles.questionIcon} />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
