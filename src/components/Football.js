import React from 'react';

import footballProducts from '../football';
import '../styles/amazon.css';
import Cards from './Card';

const Football = ({handleClick}) => {
  return (
    <section>
        
       
        {footballProducts.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))}
    </section>
    
  )
}

export default Football;