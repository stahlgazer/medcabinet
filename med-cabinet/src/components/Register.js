import React from 'react'
import RegisterForm from './Form/RegisterForm'
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

const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.registerBox}>
          <RegisterForm />
        </div>
    </div>
  )
}

export default Register
