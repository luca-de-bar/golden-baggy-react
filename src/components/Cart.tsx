import React from "react";

const CartItem: React.FC<{
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
}> = ({ name, price, quantity, image, onRemove, onQuantityChange }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-8 shadow-md rounded-lg mb-4 lg:px-5">
      <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
        <img src={image} alt={name} className="w-24 h-24 object-cover rounded-lg" />
        <div className="ml-4">
          <h4 className="font-semibold text-center whitespace-nowrap sm:text-left mb-8">{name}</h4>
          <p className="text-gray-600 text-center sm:text-left">${price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full sm:w-auto">
        <p className="mx-4">Quantità: </p>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => onQuantityChange(Number(e.target.value))}
          className="w-8 text-center border border-gray-300 rounded-md mr-4"
        />
        <button onClick={onRemove} className="bg-red-600 rounded-md text-white hover:bg-red-700 p-1.5 sm:p-1 md:p-1 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="min-w-5 min-h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Cart: React.FC = () => {
  const [items, setItems] = React.useState([
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

  const [discountCode, setDiscountCode] = React.useState("");

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
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Your Cart</h2>
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
              <h3 className="text-xl font-semibold">Total:</h3>
              <span className="text-2xl font-bold">${getTotal().toFixed(2)}</span>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">Apply Discount</button>
            </div>
            <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
