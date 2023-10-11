import "./cart-item.styles.jsx";
import { CartItems, ItemDetail, StyledImg, StyledName } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItems>
      <StyledImg src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <StyledName>{name}</StyledName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetail>
    </CartItems>
  );
};

export default CartItem;
