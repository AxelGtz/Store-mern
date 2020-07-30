import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import history from './utils/history';
import Routes from './utils/Routes';

function App() {
  return (
     <div>
       <Router history={history}> 
          <Routes/>
       </Router>
    </div>
  );
}

export default App;
