import React from "react";
import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

import { loginHandler } from "../../utils/axiosWithAuth";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: "1rem",
  },
  inputContainer: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    width: "100%",
    margin: '1rem 0',
  },
  submit: {
    width: "100%",
    display: "flex",
    marginLeft: "1rem"
  },
  btn: {
    color: 'white',
    background: "#044A53"
  }
}));

const LoginForm = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values, { isSubmitting, resetForm }) => {
        console.log(values);
        loginHandler(values);
        isSubmitting(false)
        resetForm()
      }}
    >
      {({ values, actions, isSubmitting }) => (
        <Form className={classes.inputContainer}>
          <Field
            name="username"
            label="Username"
            as={TextField}
            className={classes.inputBox}
            variant="outlined"
          />
          <Field
            name="password"
            label="Password"
            type="password"
            as={TextField}
            className={classes.inputBox}
            variant="outlined"
          />
          <Field
            className={classes.btn}
            type="submit"
            disabled={isSubmitting}
            as={Button}
            variant="contained"
          > Login</Field>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
