import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async ({queryKey}: any) => {
  try{
    const [key, page] = queryKey;
    console.log(key, page)
    const res = await fetch(`http://swapi.dev/api/planets?page=${page}`);
    return res.json();
  }
  catch(err){
    throw err;
  }
};


const Planets: React.FC = () => {
    const [page, setPage] = React.useState<number>(3);
    const { data, status } = useQuery<any, Error>(['Planets', page], fetchPlanets, {
      staleTime: 0,
      cacheTime: 3000,
      onSuccess: () => console.log('data loaded successfully')
    });

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
