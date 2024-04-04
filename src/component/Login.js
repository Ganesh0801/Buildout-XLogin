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
        setWarn("")
        setLogin(true)
     }
       else{
      
        setWarn("Invalid username or password")
        setLogin(false)
       }
    }

  return (
   <>
   <div>
   <h1>Login Page</h1>
     
     {login ? (<p>Welcome, user!</p>):(
        <form  onSubmit={handleSubmit}>
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
        <br/>
       
            <label htmlFor='password'>Password:</label>
                <input 
                id='password'
                type='password'
                value={password}
                onChange={handlePass}
                required
                />
       </div>
       <br/>
       <button type='submit'
        onClick={handleSubmit}>Submit
        </button>
     </form>
     )}
   </div>
</>
  )
}

export default Login;