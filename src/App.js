import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
  if(loading) return <h4 className="text-info">Data loading, Please wait.</h4>
  return (
    <div className="App">
      {/* Site Header / Navbar  */}
      <nav className="navbar navbar-light text-light site-header">
        <div className="container-fluid">
            <a className="navbar-brand site-title" href="https://masrursakib-react-apollo-graphql-papaparse-bootstrap5-tasks.netlify.app/">
                <h4>React Frontend Tasks</h4>
            </a>
        </div>
      </nav>
      {/* Apollo GraphQl Component  */}
      <div className="apollo-graphql-task-page">
      {/* Apollo GraphQl Component Header / Navbar  */}
        <nav className="navbar navbar-light text-light apollo-graphql-page-header">
          <div className="container-fluid apollo-graphql-page-title">
              <a className="navbar-brand" href="/apollo-graphql">
                  <h5>Apollo Hook (GraphQL) Task</h5>
              </a>
          </div>
        </nav>
        {/* Apollo GraphQl Component Data Table  */}
        <table className="table table-bordered">
          <thead className="thead-light bg-info">
              <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Website</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td class>{data.user.id}</td>
                  <td>{data.user.name}</td>
                  <td>{data.user.username}</td>
                  <td>{data.user.email}</td>
                  <td>{data.user.phone}</td>
                  <td>{data.user.website}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
