import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  subtractQuantity,
  addQuantity,
} from "../../Redux/reducers/cartSlice";

export default function Item({ item, isAdded, amount }) {
  const dispatch = useDispatch();

  const [added, SetAdded] = React.useState(isAdded);
  const [itemAmount, setItemAmount] = React.useState(amount);

  return (
    <div className="ShopItem">
      <div
        className="ShopInnerImage"
        style={{
          backgroundColor: `#${item.color}`,
        }}
      >
        <img src={item.image} alt="" />
        <span className="InnerBackground" />
      </div>
      <h2>{item.title}</h2>
      <p className="desc">{item.Description}</p>
      <h3 className="price">${item.Price}</h3>
      <div className="LowerItemSection">
        <div className="AddItem">
          <p
            onClick={() => {
              if (itemAmount > 0) {
                itemAmount - 1 === 0 && SetAdded(false);
                setItemAmount(itemAmount - 1);
                dispatch(subtractQuantity(item));
              }
            }}
          >
            -
          </p>
          <p>{itemAmount}</p>
          <p
            onClick={() => {
              if (itemAmount === 0) {
                setItemAmount(itemAmount + 1);
                dispatch(addToCart(item));
                SetAdded(true);
              } else {
                setItemAmount(itemAmount + 1);
                dispatch(addQuantity(item));
              }
            }}
          >
            +
          </p>
        </div>
        <button
          onClick={() => {
            if (!added) {
              setItemAmount(itemAmount + 1);
              dispatch(addToCart(item));
              SetAdded(true);
            } else {
              dispatch(removeFromCart(item));
              setItemAmount(0);
              SetAdded(false);
            }
          }}
        >
          {!added ? "BUY NOW" : "REMOVE"}
        </button>
      </div>
    </div>
  );
}
