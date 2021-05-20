import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
  try{
    const res = await fetch("http://swapi.dev/api/planets");
    return res.json();
  }
  catch(err){
    throw err;
  }
};

const Planets: React.FC = () => {
  const { data, status } = useQuery('Planets', fetchPlanets);
    console.log(data)
    if(status === 'error'){
      return <span>Oops, Failed to get data!!</span>;
    }

    if(status === 'loading'){
      return<span>Loading Data...</span>;
    }

    return (
        <React.Fragment>
          {
            data.results.map((item: any)=> (
              <Planet planet = {item} key={item.name} />
            ))
          }
        </React.Fragment>
    );
}

const Planet = ({ planet }: any) => {
  return (
    <div className="card">
      <h3>{ planet.name }</h3>
      <p>Population - { planet.population }</p>
      <p>Terrain - { planet.terrain }</p>
    </div>
  );
}

export default Planets
