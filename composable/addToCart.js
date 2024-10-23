// Function to add an item to the shopping cart
const addToDb = (id) => {
    if (process.client) {  // Check if we're in the client
        try {
            let shoppingCart = {};

            // Get the shopping cart from local storage
            const storedCart = localStorage.getItem('shopping-cart');
            if (storedCart) {
                shoppingCart = JSON.parse(storedCart);
            }

            // Add quantity
            const quantity = shoppingCart[id];
            if (quantity) {
                const newQuantity = quantity + 1;
                shoppingCart[id] = newQuantity;
            } else {
                shoppingCart[id] = 1;
            }

            // Store updated cart in local storage
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        } catch (error) {
            console.error('Error adding to the shopping cart:', error);
        }
    }
}

// Function to retrieve the shopping cart from local storage
const getStoredCart = () => {
    if (process.client) {
      try {
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          return parsedCart;
        }
      } catch (error) {
        console.error('Error retrieving the shopping cart:', error);
      }
    }
    return {};
  };
  
const removeFromCart = (id) =>{
  if(process.client){
    try{
        const storedCart = localStorage.getItem('shopping-cart');
        if(storedCart){
            const shoppingCart = JSON.parse(storedCart);
            if(id in shoppingCart){
                delete shoppingCart[id];
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
            }
        }
    
    }
   catch (error) {
    console.error('Error retrieving the shopping cart:', error);
  }
}
};


const increaseQuantity = (id) => {
  if (process.client) {  
    try {
      let shoppingCart = {};

      const storedCart = localStorage.getItem('shopping-cart');
      if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
      }

      // Add or update the quantity of the item
      if (shoppingCart[id]) {
        shoppingCart[id] += 1;  // Increase the existing quantity
      } else {
        shoppingCart[id] = 1; 
      }

      // Store the updated cart in local storage
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    } catch (error) {
      console.error('Error updating the shopping cart:', error);
    }
  }
};

  // Function to decrease item quantity in the shopping cart
  const decreaseQuantity = (id) => {
    if (process.client) {
      try {
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
          let shoppingCart = JSON.parse(storedCart);
  
          // Check if the item exists and decrease its quantity
          if (shoppingCart[id]) {
            if (shoppingCart[id] > 1) {
              shoppingCart[id] -= 1; // Decrease the quantity
            } else {
              delete shoppingCart[id]; 
            }
  
            if (Object.keys(shoppingCart).length > 0) {
              localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
            } else {
              localStorage.removeItem('shopping-cart');
            }
          }
        }
      } catch (error) {
        console.error('Error decreasing the item quantity:', error);
      }
    }
  };

export { addToDb, getStoredCart, removeFromCart,increaseQuantity, decreaseQuantity};
