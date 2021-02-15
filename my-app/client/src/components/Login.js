


export default function Login(props) {
//event listener on submit on form.
//when it catches creat an axios request that send the post to backend
// axios.post('/login)
  return (
    <section>
      <h1>PrivateComponent</h1>
    <div>
      <p>Login</p>
      <h1>I am Login</h1>
        <label>Username : </label>   
        <input type="text" placeholder="Enter Username" name="username" required></input>
        <label>Password : </label>   
        <input type="password" placeholder="Enter Password" name="password" required></input> 
        <button type="submit">Login</button>   

    </div>
    </section>


  )
}