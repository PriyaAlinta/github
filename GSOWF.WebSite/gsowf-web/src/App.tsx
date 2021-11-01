import React from 'react';
import Home from './Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import OurNetwork from './OurNetwork';
import ContactUs from './ContactUs';
import PublicationsConsultations from './PublicationsConsultations';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/OurNetwork" exact component={OurNetwork} />
            <Route path="/PublicationsConsultations" exact component={PublicationsConsultations} />
            <Route path="/ContactUs" exact component={ContactUs} />
        </Switch>
    </Router>
  );
}

export default App;
