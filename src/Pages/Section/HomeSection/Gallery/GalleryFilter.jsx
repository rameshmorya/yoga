import React, { useState } from "react";
import "../Gallery/Gallery.css";
import Gallery from "../../../../Data/Gallery";
import GalleryItem from "../Gallery/GalleryItem";
import GalleryTabList from "../Gallery/GalleryTabList";

const allTabs = [
  ...new Set(
    Gallery.map((curElem) => {
      return curElem.catagory;
    })
  ),
  "all",
];

const GalleryFilter = () => {
  const [items, setItems] = useState(Gallery);
  const [tabItems] = useState(allTabs);

  const filterItem = (categItem) => {
    if (categItem === "all") {
      setItems(Gallery);
      return;
    }

    const updateItem = Gallery.filter((curntElem) => {
      return curntElem.catagory === categItem;
    });
    setItems(updateItem);
  };
  return (
    <>
      <div className="galleryBox">
        <div className="container">
          <div className="headingBox">
            <h2 className="heading">Order your Favorite Dish</h2>
          </div>
          <GalleryTabList filterItem={filterItem} tabItems={tabItems} />
          <GalleryItem items={items} />
        </div>
      </div>
    </>
  );
};
export default GalleryFilter;
