import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const query = gql`
  query usersQuery {
    users {
      data {
        id
        name
        username
        email
        phone
        website
      }
    }
  }
`

function App() {
  const { loading, data } = useQuery(query);
  if (loading) return <h4 className="pt-5 text-center text-info">Data loading, Please wait...</h4>
  console.log(data);
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
        <div className="pl-4 pr-4">
          <h5 className="pb-3 text-center text-info">Users List using GraphQl, Apollo and React</h5>
          <table className="table table-bordered">
            <thead className="thead-light bg-info">
              <tr>
                <th className="text-light" scope="col">Id</th>
                <th className="text-light" scope="col">Name</th>
                <th className="text-light" scope="col">Username</th>
                <th className="text-light" scope="col">Email</th>
                <th className="text-light" scope="col">Phone</th>
                <th className="text-light" scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {
                data.users.data.map((userData) => (
                  <tr key={userData.id}>
                    <td>{userData.id}</td>
                    <td>{userData.name}</td>
                    <td>{userData.username}</td>
                    <td>{userData.email}</td>
                    <td>{userData.phone}</td>
                    <td><a href={"https://"+userData.website} target="_blank" rel="noreferrer nofollow">{userData.website}</a></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
