import './App.css';

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const query = gql`
  query {
    user(id: 1) {
      id
      name
      username
      email
      phone
      website
    }
  }
`

function App() {
  const {loading, data } = useQuery(query)
  if(loading) return <h4>Data loading, Please wait.</h4>
  console.log(data);
  return (
    <div className="App">
      <h1>{data.user.name}</h1>
    </div>
  );
}

export default App;
