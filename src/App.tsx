import { useState } from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';
import {ReactQueryDevtools }  from 'react-query-devtools';


function App() {
  let [page, setPage] = useState('planets');

  return (
   <>
   {/* <ReactQueryDevtools /> */}
     
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
   </>
  );
}

export default App;
