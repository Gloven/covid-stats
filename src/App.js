import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Drawer from './components/Drawer';
import Header from './components/Header';
import WorldPage from './pages/World';
import CountriesPage from './pages/Countries';
import AboutPage from './pages/About';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title="Covid stats" />
      <Drawer />
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/world`} component={WorldPage} />
          <Route path={`${process.env.PUBLIC_URL}/countries`} component={CountriesPage} />
          <Route path={`${process.env.PUBLIC_URL}/about`} component={AboutPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
