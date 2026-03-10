import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'; // Let's create this or just append to index.css

const Cart = () => {
    const { isCartOpen, toggleCart, cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

    if (!isCartOpen) return null;

    const handleCheckout = () => {
        let message = "Hi, I'd like to place an order:\\n\\n";
        cartItems.forEach(item => {
            message += `${item.name} (${item.quantity}x) - $${(item.price * item.quantity).toFixed(2)}\\n`;
        });
        message += `\\nTotal: $${cartTotal.toFixed(2)}`;

        // Replace 919876543210 with actual merchant WhatsApp number
        const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <div className="cart-overlay" onClick={toggleCart}></div>
            <div className="cart-sidebar">
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-cart-btn" onClick={toggleCart}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is currently empty.</p>
                            <button className="btn-continue" onClick={toggleCart}>Continue Shopping</button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <div className="item-price">${item.price.toFixed(2)}</div>
                                    <div className="qty-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                </div>
                                <button className="item-remove" onClick={() => removeFromCart(item.id)}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6L18 20a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="btn-checkout" onClick={handleCheckout}>Checkout via WhatsApp</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
