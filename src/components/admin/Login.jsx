// import { observer } from "mobx-react"
// import { Button, TextField } from "@mui/material"
// import dataStore from "../data/loginStore"
// import { checkLogin } from "../data/loginServer"
// import { useState } from "react"
// import axios from 'axios'
// import '../../styles/login.css'


// const Login = (observer(() => {

//   const [data, setData] = useState({})


//   return (
//     <>
//       login
//       <form id="formLogin">
//         <div>
//           <TextField id="outlined-basic" label="name" variant="outlined" name="name" placeholder="name" value={data.name} onChange={({ target }) => setData({ ...data, [target.name]: target.value })} />
//           <TextField id="outlined-basic" label="password" variant="outlined" name="password" placeholder="password" value={data.password} onChange={({ target }) => setData({ ...data, [target.name]: target.value })} />
//         </div>
//         <Button onClick={() => checkLogin(data)}>to login</Button>
//       </form>
//     </>
//   )
// }))

// export default Login
import { observer } from "mobx-react"
import { Button, TextField } from "@mui/material"
import { checkLogin } from "../data/loginServer"
import { useState } from "react"
import '../../styles/login.css'

const Login = observer(() => {
  const [data, setData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    checkLogin(data).catch(x => {
      setData({})
    });
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form id="formLogin" onSubmit={handleSubmit}>
        <div className="input-container">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            placeholder="Enter your name"
            value={data.name || ""}
            onChange={({ target }) => setData({ ...data, [target.name]: target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={data.password || ""}
            onChange={({ target }) => setData({ ...data, [target.name]: target.value })}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
    </div>
  )
})

export default Login
