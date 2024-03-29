import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../context/CartProvider';
import { ItemCount } from '../ItemCount';
import { Container, Button, Wrapper, ImageWrapper, SoldOutText, ProductImage, ProductContainer, ProductDescription } from './styles';


export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);


  const handleAdd = (product, quantity) => {
    addToCart({ ...product, quantity });  
  };
  return (
    <Container>
      <ProductContainer>
        <h1>{item.title}</h1>
          <ImageWrapper>
            <ProductImage src={`/images/${item.pictureUrl}`} alt={item.imgAlt}/>
          </ImageWrapper>
        <Wrapper>
          <ProductDescription>
            <p>{item.productDetail}</p>
            <p>preço: R${item.price}</p>
            {item.stock > 0 ? (
            <>
              <p>estoque disponível: {item.stock}</p> 
              <ItemCount 
                  stock={item.stock} 
                  initial={1} 
                  onAdd={() => handleAdd(item)}
                />
                <Button onClick={() => navigate('/cart')}>
                  finalizar minha compra
                </Button>
            </>)
              : <SoldOutText>esgotado</SoldOutText>}
          </ProductDescription>
        </Wrapper>
      </ProductContainer>
    </Container>
  );
};

export default ItemDetail;