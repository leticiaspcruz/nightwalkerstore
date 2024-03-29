import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetailContainer, NavBar } from '../components';

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <>
     <NavBar />
     <ItemDetailContainer product={productId} />
    </>
  );
};

export default ProductDetail;