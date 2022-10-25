import {useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// style
import styles from './Signup.module.css'

export default function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isPending, signup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form');
    signup(email, password, displayName);  
  }

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Name:</span>
        <input 
          type="text" 
          name="name" 
          id="name" 
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}/>
      </label>
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

    {!isPending && <input className="btn submit" type="submit" value="Sign Up" />}
    {isPending && <button className="btn submit" disabled>loading</button>}
    {error && <p>{error}</p>}

    </form>
  )
}