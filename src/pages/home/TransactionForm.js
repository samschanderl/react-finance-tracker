import {useState, useEffect} from 'react';
import { useFirestore } from '../../hooks/useFirestore';

export default function TransactionForm({ uid, user }) {
  const [name, setName ] = useState('');
  const [ amount, setAmount ] = useState('');
  const { addDocument, response } = useFirestore('transactions');

  const handleSubmit = (e) => {
    console.log('handling submit - before default')
    console.log(uid, name, amount)
    e.preventDefault();
    addDocument({
      uid,
      name, 
      amount})
  }

  // reset the form fields
  useEffect(() => {
    console.log('response success: ', response.success)
    if (response.success) {
      setName('')
      setAmount('')
    }
  }, [response.success])

  return (
    <>
        <form onSubmit={handleSubmit}>
          <h3>Add a Transaction</h3>
            <label>
                <span>Transaction name:</span>
                <input 
                type="text" 
                required
                onChange={(e) => setName(e.target.value)} 
                value={name}/>
            </label>
            <label>
                <span>Amount: $</span>
                <input 
                type="number" 
                required
                onChange={(e) => setAmount(e.target.value)} 
                value={amount}/>
            </label>
            <button>Submit</button>
        </form>
    </>
  )
}
