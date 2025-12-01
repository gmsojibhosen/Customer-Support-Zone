import { Suspense } from 'react'
import './App.css'
import Counter from './component/Counter/Counter'
import CustomerTickets from './component/CustomerTickets/CustomerTickets'
import Navbar from './component/Navbar/Navbar'

const fetchTickets = async () => {

  const res = await fetch('/customerTicket.json')
  const data = await res.json()
  return data;
}
const customerTickets = fetchTickets()

function App() {


  return (
    <div className='bg-[#F5F5F5]'>
    <Navbar></Navbar>
    <Counter></Counter>
    <Suspense fallback = 'Wait for data...'>
      <CustomerTickets customerTickets = {customerTickets}></CustomerTickets>
    </Suspense>
    </div>
  )
}

export default App
