import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import SearchBox from "./SearchBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > *": {
      margin: theme.spacing(1),
    },
    borderBottom: "solid 1px grey",
  },
  links: {
    width: "",
    margin: "0 0.3rem",
    color: "#2F5973",
  },
  medTitle: {
    marginLeft: 10,
    color: "#2F5973",
  },
  orange: {
    marginRight: 10,
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const NavigationBar = (props) => {
  const classes = useStyles();
  const isRegistered = sessionStorage.getItem("ID")

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.medTitle}>MEDBAY</Typography>
      </div>
      <SearchBox />
      {isRegistered ? 
        <div>
          <NavLink className={classes.links} to="/">
            Login
          </NavLink>
          <NavLink className={classes.links} to="/register">
            Register
          </NavLink>
          <NavLink className={classes.links} to="/browse">
            Strains
          </NavLink>
          <NavLink className={classes.links} to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className={classes.links} to="/contact">
            Contact
          </NavLink>
        </div>
       : 
        <div>
          <NavLink className={classes.links} to="/">
            Login
          </NavLink>
          <NavLink className={classes.links} to="/register">
            Register
          </NavLink>
          <NavLink className={classes.links} to="/contact">
            Contact
          </NavLink>
        </div>
      }

      <Avatar className={classes.orange} />
    </div>
  );
};

export default NavigationBar;
