import {useState } from 'react';

// style
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form');
    console.log(email, password)
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          name="email" 
          id="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}/>
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          name="password" 
          id="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}/>
      </label>
      <input className="btn submit" type="submit" value="Submit" />

    </form>
  )
}