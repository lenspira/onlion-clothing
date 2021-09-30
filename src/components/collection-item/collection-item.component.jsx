import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionFooterContainer,
  CollectionItemName,
  CollectionItemPrice,
  AddButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage style={{ backgroundImage: `url(${imageUrl})` }}></CollectionItemImage>
      <CollectionFooterContainer>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>${price}</CollectionItemPrice>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        {" "}
        Add to cart{" "}
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
