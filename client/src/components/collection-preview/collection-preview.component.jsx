import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </CollectionPreviewTitle>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
