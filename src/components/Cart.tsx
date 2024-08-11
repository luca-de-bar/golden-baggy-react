import React, { useState, useEffect } from "react";
import "./DrawerCart.css";

const CartItem: React.FC<{
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
}> = ({ name, price, quantity, image, onRemove, onQuantityChange }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-8 shadow-md rounded-lg mb-4 lg:px-5">
      <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
        <img src={image} alt={name} className="w-24 h-24 object-cover rounded-lg" />
        <div className="ml-4">
          <h4 className="font-semibold text-center whitespace-nowrap sm:text-left mb-8 text-gray-900">{name}</h4>
          <p className="text-gray-600 text-center sm:text-left">${price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full sm:w-auto">
        <p className="mx-4 lg:mr-10 text-gray-900">Quantità: </p>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => onQuantityChange(Number(e.target.value))}
          className="w-8 text-center border border-gray-800 rounded-md mr-4 text-slate-950"
        />
        <button onClick={onRemove} className="bg-gray-800 rounded-md text-white hover:bg-gray-900 p-1.5 sm:p-1 md:p-1 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="min-w-5 min-h-5 sm:w-5 sm:h-5 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Cart: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const openCart = () => {
    setIsCartVisible(true);
    setTimeout(() => {
      setIsCartOpen(true);
    }, 10); // Small delay to trigger the CSS transition
  };

  const closeCart = () => {
    setIsCartOpen(false);
    setTimeout(() => {
      setIsCartVisible(false);
    }, 500); // Matches the duration of the CSS transition
  };

  useEffect(() => {
    if (isCartVisible) {
      // Disabilita lo scroll del body quando il cart è aperto
      document.body.style.overflow = "hidden";
    } else {
      // Abilita lo scroll del body quando il cart è chiuso
      document.body.style.overflow = "auto";
    }
  }, [isCartVisible]);

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [discountCode, setDiscountCode] = useState("");

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)));
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <a href="#" onClick={openCart}>
        {children}
      </a>
      {isCartVisible && (
        <div className={`fixed inset-0 z-50 flex justify-end ${isCartOpen ? "cart-open" : "cart-closed"}`}>
          {/* Sfondo opaco */}
          <div className="fixed inset-0 bg-black opacity-50 transition-opacity duration-500 ease-in-out" onClick={closeCart}></div>

          {/* Drawer */}
          <div className={`cart-drawer bg-white w-full sm:w-96 h-full p-4 shadow-lg transform transition-transform duration-500 ease-in-out ${isCartOpen ? "open" : "closed"}`}>
            <button onClick={closeCart} className="text-gray-900 hover:text-gray-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Cart</h2>
            <p className="text-gray-600 mb-6">Review your items before checkout.</p>
            <div className="bg-gray-100 p-2 rounded-lg shadow-lg">
              {items.length === 0 ? (
                <p className="text-gray-600 text-center">Your cart is empty.</p>
              ) : (
                <div>
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      image={item.image}
                      onRemove={() => handleRemoveItem(item.id)}
                      onQuantityChange={(quantity) => handleQuantityChange(item.id, quantity)}
                    />
                  ))}
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
                    <h3 className="text-xl font-semibold text-gray-900">Total:</h3>
                    <span className="text-2xl font-bold text-gray-900">${getTotal().toFixed(2)}</span>
                  </div>
                  <div className="mt-6">
                    <input
                      type="text"
                      placeholder="Discount Code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="w-full p-2 border border-gray-800 rounded-lg mb-4 text-slate-950"
                    />
                    <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition duration-300">Apply Discount</button>
                  </div>
                  <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-300">Proceed to Checkout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
