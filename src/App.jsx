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
// add Resolved 
const [resolved, setResolved] = useState([])

  return (

    <div className='bg-[#F5F5F5] page-slide'>
    <Navbar></Navbar>
    <Counter count = {count} resolved = {resolved}></Counter>
    <div className='max-w-[1400px] mx-auto mt-20'>
      <Suspense fallback = {<div><span className="loading loading-spinner loading-xs"></span>
<span className="loading loading-spinner loading-sm"></span>
<span className="loading loading-spinner loading-md"></span>
<span className="loading loading-spinner loading-lg"></span>
<span className="loading loading-spinner loading-xl"></span></div>}  >
      <CustomerTickets 
      customerTickets = {customerTickets} 
      count = {count} 
      setCount = {setCount}
      resolved = {resolved}
      setResolved = {setResolved}>
         
      </CustomerTickets>
    </Suspense>
    </div>
    <ToastContainer />
    </div>
  )
}

export default App
