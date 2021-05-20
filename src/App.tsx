import {useState} from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  let [page, setPage] = useState('planets');

  return (
    <div className="App">
     <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        { page === 'planets' ? <Planet /> : <People /> }
      </div>
    </div>
  );
}

export default App;
