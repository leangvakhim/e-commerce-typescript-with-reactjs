import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CartListProduct = () => {
    const { cart, finalizeCartTotalWithCoupon, calculateCartTotal, decreaseToCart,  addToCart, removeFromCart } = useCart();
    const [subtotal, setSubtotal] = useState(calculateCartTotal());
    const [coupon, setCoupon] = useState('');
    const [isCouponApplied, setIsCouponApplied] = useState(false);

    const updateSubtotal = () => {
      const value = isCouponApplied ? 1 : calculateCartTotal();
      setSubtotal(value);
      finalizeCartTotalWithCoupon(value);
    };

    useEffect(() => {
      updateSubtotal();
    }, [cart, isCouponApplied]);

    return (
        <div className="untree_co-section before-footer-section">
            <div className="container">
              <div className="row mb-5">
                <form className="col-md-12" method="post">
                  <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              <img style={{
                                width: '100px',
                                height: '80px',
                                objectFit: 'contain'
                              }} src={item.image} alt="Image" className="img-fluid" />
                            </td>
                            <td className="product-name">
                              <h2 style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }} className="h5 text-black" >{item.title}</h2>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>
                              <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: '120px' }}>
                                <div className="input-group-prepend">
                                  <button
                                    className="btn btn-outline-black decrease"
                                    type="button"
                                    disabled={item.quantity === 1}
                                    onClick={() => decreaseToCart(item)}
                                  >
                                    -
                                  </button>
                                </div>
                                <input type="text" className="form-control text-center quantity-amount" value={item.quantity} readOnly />
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-outline-black increase"
                                    type="button"
                                    onClick={() => addToCart(item)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                            <td><a
                              onClick={() => {
                                Swal.fire({
                                  title: 'Are you sure?',
                                  text: "Do you want to remove this product from the cart?",
                                  icon: 'warning',
                                  showCancelButton: true,
                                  confirmButtonColor: '#d33',
                                  cancelButtonColor: '#3085d6',
                                  confirmButtonText: 'Yes, remove it!'
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    removeFromCart(item.id);
                                    Swal.fire({
                                      icon: 'success',
                                      title: 'Removed!',
                                      text: 'The product has been removed from your cart.',
                                      timer: 1500,
                                      showConfirmButton: false
                                    });
                                  }
                                });
                              }}
                              className="btn btn-black btn-sm">X</a></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="row mb-5">
                    {/* <div className="col-md-6 mb-3 mb-md-0">
                      <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                    </div> */}
                    <div className="col-md-6">
                      <button className="btn btn-outline-black btn-sm btn-block" onClick={() => window.location.href = "/shop"}>Continue Shopping</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="text-black h4" htmlFor="coupon">Coupon</label>
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div className="col-md-8 mb-3 mb-md-0">
                      <input
                        type="text"
                        className="form-control py-3"
                        id="coupon"
                        placeholder="Coupon Code"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                      />
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn btn-black"
                        onClick={(e) => {
                          e.preventDefault();
                          if (coupon === 'VAKHIM123') {
                            setIsCouponApplied(true);
                          } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Invalid coupon code',
                                showConfirmButton: false,
                                timer: 1500
                            });
                          }
                        }}
                      >
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-5">
                  <div className="row justify-content-end">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-12 text-right border-bottom mb-5">
                          <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <span className="text-black">Subtotal</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">${subtotal.toFixed(2)}</strong>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <span className="text-black">Total</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">${subtotal.toFixed(2)}</strong>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <Link to="/checkout" className="btn btn-black btn-lg py-3 btn-block"
                            // onClick={() => calculateCartTotal()}
                            onClick={updateSubtotal}
                          >Proceed To Checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default CartListProduct