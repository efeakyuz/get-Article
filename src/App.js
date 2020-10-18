import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Article from './Components/Article';
import Nav from './Components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Container style={{marginTop:"2rem"}}>
        <Switch>
          <Route path="/" exact component={Article}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
