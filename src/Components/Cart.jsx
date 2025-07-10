
import React, { useEffect, useState } from 'react';

const Cart = ({ cart }) => {
    const [quantities, setQuantities] = useState({});
    const [total, setTotal] = useState(0);

    // Initial-a quantity 1-a set pannura
    useEffect(() => {
        const initialQty = {};
        cart.forEach(item => {
            initialQty[item.productId] = 1;
        });
        setQuantities(initialQty);
    }, [cart]);

    // Total calculate pannura epovum quantity change aana udane
    useEffect(() => {
        let t = 0;
        cart.forEach(item => {
            const qty = quantities[item.productId] || 1;
            t += item.productprice * qty;
        });
        setTotal(t);
    }, [quantities, cart]);

    // Quantity change aagumbodhu handle pannura function
    const handleQtyChange = (id, e) => {
        const qty = parseInt(e.target.value, 10);
        if (qty > 0) {
            setQuantities(prev => ({ ...prev, [id]: qty }));
        }
    };

    function sendData(product){
        const cartWithQuantities = product.map(item => ({
        ...item,
        quantity: quantities[item.productId] || 1
    }));
    console.log("Cart with Quantities:", cartWithQuantities);
    }

    return (
        <>
            <div className="container cart_section">
                {cart.map(product => (
                    <div key={product.productId} className="cartSection">
                        <div className='cartImage'>
                            <img src={product.productImg} alt="" />
                        </div>
                        <div className='cart_product_details'>
                            <div>
                                <h5>{product.productName}</h5>
                            </div>
                            <div className='PriceDetails'>
                                <p>Price: ₹{product.productprice}</p>
                            </div>
                            <div className='PriceQuantity'>
                                <div className="d-flex align-items-center justify-content-start ">
                                    <label className="me-2">Qty:</label>
                                    <input
                                        type="number"
                                        min={1}
                                        value={quantities[product.productId] || 1}
                                        onChange={(e) => handleQtyChange(product.productId, e)}
                                        className="form-control w-50"
                                    />
                                </div>
                            </div>
                            <div className='PriceDetails'>
                                <p>Subtotal: ₹{(quantities[product.productId] || 1) * product.productprice}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className='card cart_card'>
                            <div className='card-header'>
                                <h2 className='card-title'>Cart Total</h2>
                            </div>
                            <div className='card-splid'>
                                <table>
                                    <tr>
                                        <th>Shipping:</th>
                                        <div>
                                            <td>Enter your address to view shipping options.
                                                <span data-bs-toggle="collapse" href="#collapseExample">Calculate shipping</span></td>
                                            <div className="collapse" id="collapseExample">
                                                <form action="" method="post">
                                                    <input type="text" placeholder='Enter Name:'/>
                                                    <input type="email" placeholder='Enter Email:'/>
                                                    <input type="number" placeholder='Enter PhoneNumber:'/>
                                                    <input type="text" placeholder='Enter Address:'/>
                                                    <input type="number" placeholder='Enter PinCode:'/>
                                                </form>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <th>Total:</th>
                                        <td>₹{total}</td>
                                    </tr>
                                </table>
                                {/* <h4>Total: ₹{total}</h4> */}
                            </div>
                            <div className='check-out-btn'>
                                <button onClick={() => sendData(cart)}>Proceed To Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
