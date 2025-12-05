import { Suspense, useState, useEffect } from 'react'
import './App.css'
import Counter from './component/Counter/Counter'
import CustomerTickets from './component/CustomerTickets/CustomerTickets'
import Navbar from './component/Navbar/Navbar'
 import { ToastContainer,} from 'react-toastify';




function App() {
 const [customerTickets, setCustomerTickets] = useState([]);
useEffect(() => {
  const loadTickets = async () => {
    try {
      const res = await fetch('/customerTicket.json');
      const data = await res.json();
      setCustomerTickets(data);
    } catch (error) {
      console.error("data is fail", error);
    }
  };
  loadTickets();
}, []);


const [addTask, setAddTask] = useState([])
// add counter
const [count,setCount] = useState(0);
// add Resolved 
const [resolved, setResolved] = useState([]);
// remove cart 

const removeCustomerTicket = (removeTicket) => {
  console.log(removeTicket)
  const filterRemove = customerTickets.filter(t => t.id !== removeTicket.id);
  setCustomerTickets(filterRemove);
};


const removeCart = (cart) => {
const filterRemoveCart = addTask.filter(task => task.id !== cart.id)
setAddTask(filterRemoveCart)
setCount(count => count - 1);

}
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
      addTask = {addTask}
      setAddTask = {setAddTask} 
      count = {count} 
      setCount = {setCount}
      resolved = {resolved}
      setResolved = {setResolved}
      removeCart={removeCart}
      removeCustomerTicket={removeCustomerTicket}
      >
         
      </CustomerTickets>
    </Suspense>
    </div>
    <ToastContainer />
    </div>
  )
}

export default App
