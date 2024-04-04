import React,{useState} from 'react';


const Login = () => {
    const[name,setName] = useState("");
    const[password,setPassword]=useState("");
    const[login,setLogin]=useState(false);
   const[warn,setWarn]=useState("");
 
    const handleName = (e)=>{
        setName(e.target.value)
        console.log("name clicked")
    }
    const handlePass = (e)=>{
        setPassword(e.target.value)
        console.log("pass type")
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
       if(name === "user" && password === "password"){
        setLogin(true)
        setWarn("")
       }
       else{
        console.log("not");
        setWarn("Invalid username or password")
       }
    }

  return (
   <>
     <h1>Login Page</h1>
     
     {login ? <p>Welcome, user!</p> :(
        <form style={{display:"block"}} >
             {warn && <p>{warn}</p>}
        <div>
        <label htmlFor='username'>Username:</label>
        <input 
        id='username'
        type='text'
        value={name}
        onChange={handleName}
        required
        />
        </div>
       <div>
       <label htmlFor='password'>Password:</label>
        <input 
        id='password'
        type='password'
        value={password}
        onChange={handlePass}
        required
        />
       </div>
       <button type='submit'
       onSubmit={handleSubmit}>Submit</button>
     </form>
     )}
     
   </>
  )
}

export default Login;