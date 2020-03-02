import React from 'react'
import { Formik, Field, Form } from 'formik'

// import SearchIcon from '@material-ui/icons/Search';
import TextField from "@material-ui/core/TextField";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // color: 'black',
  },
  inputRoot: {
    color: 'inherit',
    // background: '#e0e0e0',
    borderRadius: 15,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250,
      '&:focus': {
        width: 276,
      },
    },
  },
}));

const SearchBox = () => {
  const classes = useStyles();
  return (
    <div>
      <Formik
      initialValues={{ search: "" }}
      onSubmit={(values, { isSubmitting, resetForm }) => {
        
      }}
    >
      {({ values, actions, isSubmitting }) => (
        <Form className={classes.inputContainer}>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search strains and dispensaries"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default SearchBox
