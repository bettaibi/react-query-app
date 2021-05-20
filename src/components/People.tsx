import React from 'react';
import { useQuery } from 'react-query';

const fetchPeople = async () => {
  try {
    const res = await fetch("http://swapi.dev/api/people");
    return res.json();
  }
  catch (err) {
    throw err;
  }
}

const People = () => {
  const { data, status } = useQuery('people', fetchPeople);

  if (status === 'error') {
    return <span>Oops, Failed to get data!!</span>;
  }

  if (status === 'loading') {
    return <span>Loading Data...</span>;
  }

  return (
    <React.Fragment>
      {
        data.results.map((item: any) => (
          <Person person={item} key={item.name} />
        ))
      }
    </React.Fragment>
  );
}


const Person = ({ person }: any) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth year - {person.birth_year}</p>
    </div>
  );
}

export default People;