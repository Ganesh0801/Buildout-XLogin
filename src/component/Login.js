// import React,{useState} from 'react';


// const Login = () => {
//     const[name,setName] = useState("");
//     const[password,setPassword]=useState("");
//     const[login,setLogin]=useState(false);
//    const[warn,setWarn]=useState("");
 
//     const handleName = (e)=>{
//         setName(e.target.value)
//         console.log("name clicked")
//     }
//     const handlePass = (e)=>{
//         setPassword(e.target.value)
//         console.log("pass type")
//     }

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//        if(name === "user" && password === "password"){
//         setWarn("")
//         setLogin(true)
//      }
//        else{
      
//         setWarn("Invalid username or password")
//         setLogin(false)
//        }
//     }

//   return (
//    <>
//    <div>
//    <h1>Login Page</h1>
     
//      {login ? (<p>Welcome, user!</p>):(
//         <form  onSubmit={handleSubmit}>
//              {warn && <p>{warn}</p>}
//         <div>
//             <label htmlFor='username'>Username:</label>
//                 <input 
//                 id='username'
//                 type='text'
//                 value={name}
//                 onChange={handleName}
//                 required
//                 />
//         <br/>
       
//             <label htmlFor='password'>Password:</label>
//                 <input 
//                 id='password'
//                 type='password'
//                 value={password}
//                 onChange={handlePass}
//                 required
//                 />
//        </div>
//        <br/>
//        <button type='submit'
//         onClick={handleSubmit}>Submit
//         </button>
//      </form>
//      )}
//    </div>
// </>
//   )
// }

// export default Login;



import { useState} from "react";

const Login = ()=>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setError("");
      setSubmitted(true);
    } else {
      setError("Invalid username or password");
      setSubmitted(false);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {submitted ? (
        <p>Welcome, user!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              required
              name="username"
              type="text"
              value={username}
            />
            <br />
            <label htmlFor="Password">Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              name="Password"
              type="text"
              value={password}
            />
            <br />
          </div>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;