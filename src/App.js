import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState([])

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    setUser(await response.json());
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <div className="App-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone no.</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data) => {
              return (<tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{`${data.address.street}, ${data.address.suite}, ${data.address.zipcode}, ${data.address.city}`}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
                <td>{data.company.name}</td>
              </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;