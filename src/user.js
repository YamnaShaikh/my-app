import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query {
    users{
    name
    }
}`

const User = () => {
    debugger;
    const data  = useQuery(GET_DATA);
  return (

  // Access the data and render your component

    <div>
      <h1>{data.users.name}</h1>
      {/* Render other components */}
    </div>
  );
}

export default User