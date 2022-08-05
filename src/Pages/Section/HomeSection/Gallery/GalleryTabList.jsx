import React from "react";

const GalleryTabList = ({ filterItem, tabItems }) => {
  return (
    <div className="galleryTabBox">
      {tabItems.map((curElem, ind) => {
        return (
          <div
            className="galleryTab"
            key={ind}
            onClick={() => filterItem(curElem)}
          >
            {curElem}
          </div>
        );
      })}
    </div>
  );
};

export default GalleryTabList;
