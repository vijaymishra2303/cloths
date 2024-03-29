import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => resp.json())
      .then((data) => setProduct(data))
      
  }, []);

  if (!product) {
    return <div></div>;
  }

  return (
    <div className="container">
      <div className="row">
        
        <div className=" col-12">
          <div className="MyCard detailCard">
            <figure>
              <img src={product.image} alt={product.title} />
            </figure>
            <div className="CardText">
              <h2>{product.price}</h2>
              <h2>{product.title}</h2>
              <h6>{product.description}</h6>
              <h6>Category: {product.category}</h6>
              <h6 className="ratingC">Rating: {product.rating.rate}</h6>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProDetails;
