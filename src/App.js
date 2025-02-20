import './App.css';
import MenuItem from './components/MenuItem';
import React, { useState } from 'react';


// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];



function App() {

  const [totalPrice, setTotalPrice] = useState(0);
  const [counts, setCounts] = useState(menuItems.map(() => 0));

  const updateCount = (index, newCount) => {
    setCounts(prevCounts => prevCounts.map((count, i) => (i === index ? newCount : count)));
  };


  const handleOrder = () => {
    let orderMessage = `Order Placed: $${totalPrice.toFixed(2)}\n`;
  
    menuItems.forEach((item, index) => {
      const itemCount = counts[index];
      if (itemCount > 0) {
        orderMessage += `You have ordered ${itemCount} ${item.title}(s)\n`;
      }
    });
  
    if (totalPrice === 0) {
      alert("No items in cart");
    } else {
      alert(orderMessage.trim());
    }
  };


  return (
    <div>
      <img 
        src="/images/pic.png" 
        alt="Menu Title" 
        className="menu-title-img" 
      />  
      <div className="menu">
      {menuItems.map((item, index) => (        
        <MenuItem
          title={item.title} 
          description={item.description} 
          price={item.price} 
          image={`/images/${item.imageName}`} 
          setTotalPrice={setTotalPrice}
          count={counts[index]}
          setCount={newCount => updateCount(index, newCount)}
        />
      ))}
      </div>

      <div className="bottomline">
        <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
        <button onClick={() => {setTotalPrice(0); setCounts(menuItems.map(() => 0));}}>Clear All</button>
        <button onClick={handleOrder}>Place Order</button>
      </div>


    </div>

  );
}




export default App;


