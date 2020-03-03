import React from 'react'
import { NavLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import SearchBox from './SearchBox'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > *': {
      margin: theme.spacing(1),
    },
    borderBottom: 'solid 1px grey',
  },
  links: {
    width: '',
    margin: '0 0.3rem',
    color: '#2F5973',
  },
  medTitle: {
    marginLeft: 10,
    color: '#2F5973',
  },
  orange: {
    marginRight: 10,
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const NavigationBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <NavLink to='/login' component={Link} >Login</NavLink> */}
      {/* <NavLink to='/register' component={Link} >Register</NavLink> */}
        <div>
          <Typography className={classes.medTitle}>MEDBAY</Typography>
        </div>
        <SearchBox />
        <div>
          <NavLink className={classes.links} to='/browse' component={Link} >Strains</NavLink>
          <NavLink className={classes.links} to='/register' component={Link} > Dispensaries </NavLink>
        </div>
  
        <Avatar className={classes.orange}/>
    </div>
  )
}

export default NavigationBar
