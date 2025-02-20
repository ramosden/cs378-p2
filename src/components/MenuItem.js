// import React from 'react';
import React, { useState } from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, image, setTotalPrice, setCount, count }) => {


    return (
      <div className="menu-item">
        
        <img src={image} alt={title} width="100" height="100" />
        <div className="menu-item-details">
          <h2>{title}</h2>
          <p>{description}</p>


          {/* addition sign */}
          <div className="pricecontainer">
            <p>{price}</p>
          </div>


        </div>
        <div className="additemcontainer">
        <button onClick={() => {setCount(count > 0 ? count - 1 : 0); setTotalPrice(prevTotal => (count > 0 ? Math.max(0, prevTotal - price) : prevTotal));}}>-</button>
        <p>{count}</p>
        <button onClick={() => {setCount(count + 1); setTotalPrice(prevTotal => prevTotal + price);}}>+</button>

        </div>
      </div>


    );
  };
export default MenuItem;



