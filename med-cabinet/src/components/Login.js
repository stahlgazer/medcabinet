import React from 'react'
import LoginForm from './Form/LoginForm'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  registerBox: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.registerBox}>
          <LoginForm />
        </div>
    </div>
  )
}

export default Login
