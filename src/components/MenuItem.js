import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, image }) => {
    return (
      <div className="menu-item">
        <img src={image} alt={title} width="100" height="100" />
        <div className="menu-item-details">
          <h2>{title}</h2>
          <p>{description}</p>

          <div className="price-container">
            <p>{price}</p>
            <button>Add to Cart</button> {/* Button next to price */}
            </div>
        </div>
      </div>
    );
  };
export default MenuItem;
