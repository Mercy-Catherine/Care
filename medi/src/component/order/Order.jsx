import React, { useState } from 'react';
import './order.css';

const Order = () => {
    const [cart, setCart] = useState([]);

    const medicines = [
        { id: 1, name: 'Paracetamol', price: 10, description: 'Pain reliever and fever reducer' },
        { id: 2, name: 'Ibuprofen', price: 15, description: 'Anti-inflammatory and pain reliever' },
        { id: 3, name: 'Amoxicillin', price: 25, description: 'Antibiotic for bacterial infections' },
        { id: 4, name: 'Cetirizine', price: 8, description: 'Relieves allergies and hay fever' },
    ];

    const addToCart = (medicine) => {
        setCart([...cart, medicine]);
    };

    return (
        <section className="order">
            <h2 className="order-title">Order Medicines</h2>
            <div className="medicine-list">
                {medicines.map((medicine) => (
                    <div key={medicine.id} className="medicine-card">
                        <h3>{medicine.name}</h3>
                        <p>{medicine.description}</p>
                        <p className="medicine-price">${medicine.price}</p>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart(medicine)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart">
                <h2>Your Cart</h2>
                {cart.length > 0 ? (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </section>
    );
};

export default Order;
