import React , {useState} from 'react';
import Navbar from './components/Navbar';

import Cart from './components/Cart';
// import Header from "./components/Header"
// import Body from "./components/Body"
import './styles/amazon.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Football from './components/Football';
import Cricket from './components/Cricket';
// import Football from './components/Football';


const App = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);
  

	const handleClick= (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
	<React.Fragment>
    {/* <Football/> */}
    
    
	
     {/* <Router> */}
     <Navbar size={cart.length} setShow={setShow} />
     
   
   
   
   {
     show ? <Cricket handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
   }
   {
     warning && <div className='warning'>Item is already added to your cart</div>
   }
      
    
	</React.Fragment>
  )
}

export default App