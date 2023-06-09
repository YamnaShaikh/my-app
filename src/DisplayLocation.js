import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export function DisplayLocations() {
    // debugger;
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
    <div className="container">
      {data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ width: "300px", height: "250px" }}
              src={`${photo}`}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <br />
        </div>
      ))}
      </div>
    </>
  );
}
