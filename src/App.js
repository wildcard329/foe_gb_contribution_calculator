import './App.css';
import {Switch, Route} from 'react-router-dom';

import BuildingForm from './view/BuildingForm.jsx';
import BuildingCards from './view/BuildingCards.jsx';
import Dashboard from './view/Dashboard.jsx';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Switch>
        <Route path='/form' component={BuildingForm} />
        <Route path='/buildings' component={BuildingCards} />
      </Switch>
    </div>
  );
}

export default App;
