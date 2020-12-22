import React from 'react';
import View from './components/View';
import { Route, Switch, HashRouter, BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter basename='/mopwnaplus/dechea/'>
      <Switch>
        <Route exact path='/' component={View} />
        {/* <View /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
