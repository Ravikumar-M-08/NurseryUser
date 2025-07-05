import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Bubls = ({ cart, setcart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const setdata = (id) => {
    const product = Data.find(info => info.productId === id);
    setSelectedProduct(product);
  };

  const addTocart = (product) => {
    const existing = cart.find((item) => item.productId === product.productId);
    if (existing) {
      alert("This Product is Already in Cart...");
      const updatedCart = cart.map((item) =>
        item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setcart(updatedCart)
    } else {
      setcart([...cart, { ...product, quantity: 1 }]);
    }
  }


  const [Data, getData] = useState([])

  useEffect(() => {
    trigger()
  }, [])

  async function trigger() {
    const values = await axios.get("http://localhost:8080/data")
    getData(values.data)
  }
  return (
    <>
      <div className="container-fulid">
        <div className="gardening-head">
          <img src="public/image/garden/bubls.jpg" alt="img" />
          <h3 className="title">Bubls</h3>
        </div>
        <div className="container">
          <div className="products_container">
            {
              Data.map(info => {
                if (info.productCategery == "Bubls") {
                  return (
                    <div className="product_container">
                      <a href="#exampleModalToggle" className="product_link" data-bs-toggle="modal" id="setdata" onClick={() => setdata(info.productId)}>
                        <div className="product_card">
                          <div className="product_img">
                            <img src={info.productImg} alt="" width="100%" height="230px" />
                          </div>
                          <div>
                            <p>{info.productName}</p>
                            <span className="price"><span>&#8377;{info.productprice}</span></span>
                            <span className="discount">10% off</span>
                            <a href="#" onClick={() => addTocart(info)} className="add_to_card"><span className="fa-solid fa-cart-shopping"></span></a>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
      {selectedProduct && (
        <div className="modal fade m-0 p-0" id="exampleModalToggle">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <img src={selectedProduct.productImg} width="100%" />
              </div>
              <div className="modal-body">
                <div className='modal-name'>
                  <h5>{selectedProduct.productName}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></button>
                </div>
                <div>
                  <span className='me-2'>₹{selectedProduct.productprice}</span>
                  <p>{selectedProduct.productCategery}</p>
                  <p>{selectedProduct.productDescription}</p>
                </div>
                <div className='modal-addtocart'>
                  <div className='modal-add'>
                    <button onClick={() => addTocart(selectedProduct)} >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Bubls
