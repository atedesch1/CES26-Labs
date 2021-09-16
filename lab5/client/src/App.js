import './App.css'
import { useState } from 'react'
import Axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [users, setUsers] = useState([])

  const registerUser = async () => {
    const userData = {
      name: name,
      address: address,
      birthDate: birthDate,
    }

    function getAge(dateString) {
      var today = new Date()
      var birthDate = new Date(dateString)
      var age = today.getFullYear() - birthDate.getFullYear()
      var m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    }

    if (getAge(userData.birthDate) >= 18) {
      try {
        await Axios.post('http://localhost:3001/registerUser', userData)
        alert('Your user was created!')
        console.log('Registered!')
      } catch (err) {
        console.log(err)
      }
    } else {
      alert('You must be older than 18!')
    }
  }

  const showUsers = async () => {
    try {
      const res = await Axios.get('http://localhost:3001/getUsers')
      setUsers(res.data.users)
      console.log('Got users!')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <div className="information">
        <label htmlFor="">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="">Address:</label>
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
        <label htmlFor="">Birth Date:</label>
        <input type="date" onChange={(e) => setBirthDate(e.target.value)} />
        <button onClick={registerUser}>Register</button>
        <button id="showUsers" onClick={showUsers}>
          Show Users
        </button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Birth Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.data.name}</td>
                <td>{user.data.address}</td>
                <td>{user.data.birthDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
