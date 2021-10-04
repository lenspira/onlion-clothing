import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionFooterContainer,
  CollectionItemName,
  CollectionItemPrice,
  AddButton,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const addItemClickHandler = (item) => dispatch(addItem(item));
  return (
    <CollectionItemContainer>
      <CollectionItemImage style={{ backgroundImage: `url(${imageUrl})` }}></CollectionItemImage>
      <CollectionFooterContainer>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>${price}</CollectionItemPrice>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemClickHandler(item)} inverted>
        {" "}
        Add to cart{" "}
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
