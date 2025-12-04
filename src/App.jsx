import { Suspense, useState } from 'react'
import './App.css'
import Counter from './component/Counter/Counter'
import CustomerTickets from './component/CustomerTickets/CustomerTickets'
import Navbar from './component/Navbar/Navbar'
 import { ToastContainer,} from 'react-toastify';
const fetchTickets = async () => {

  const res = await fetch('/customerTicket.json')
  const data = await res.json()
  return data;
}
const customerTickets = fetchTickets()

function App() {

// add counter
const [count,setCount] = useState(0);


  return (

    <div className='bg-[#F5F5F5]'>
    <Navbar></Navbar>
    <Counter count = {count}></Counter>
    <Suspense fallback = 'Wait for data...'>
      <CustomerTickets 
      customerTickets = {customerTickets} 
      count = {count} 
      setCount = {setCount}>
        
      </CustomerTickets>
    </Suspense>
    <ToastContainer />
    </div>
  )
}

export default App
