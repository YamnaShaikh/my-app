import React from 'react';
import { gql, useQuery } from 'urql';

const USERS_QUERY = gql`
  query Users {
    users {
      id
      name
    }
  }
`;

const PokemonList = () => {
  const [result] = useQuery({ query: USERS_QUERY });

  const { data, fetching, error } = result;

  return (
    <div>
      {fetching && <p>Loading...</p>}

      {error && <p>Oh no... {error.message}</p>}

      {data && (
        <ul>
          {data.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;