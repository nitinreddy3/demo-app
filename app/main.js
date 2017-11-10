require('./theme/default/stylesheets/main.sass');
// require('./libs/neo4jd3.js');
require('./libs/neo4jd3.min.js');
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabsExampleSimple from './javascript/components/TabsExampleSimple';

const App = () => (
    <MuiThemeProvider>
      <TabsExampleSimple />
    </MuiThemeProvider>
  );
ReactDOM.render(<App/>, document.getElementById('app'));