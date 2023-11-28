import React from 'react';
import cricketProducts from '../cricket';
// import footballProducts from '../football';
import '../styles/amazon.css';
import Cards from './Card';

const Cricket = ({handleClick}) => {
  return (
    <section>
        {
            cricketProducts.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
            
        }
       
       
    </section>
    
  )
}

export default Cricket;