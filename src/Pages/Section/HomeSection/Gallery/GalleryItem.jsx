import React from "react";

const GalleryItem = ({ items }) => {
  return (
    <>
      <div className="galleryGrid">
        {items.map((elem) => {
          const { id, itemname, imgsrc, description, price } = elem;
          return (
            <div className="galleryItem" key={id}>
              <div className="galleryItemImg">
                <img src={imgsrc} alt={itemname} className="imgFluid" />
              </div>
              <div className="galleryItemBody">
                <div className="galleryItemHeading">{itemname}</div>
                <p>{description}</p>
                <div className="galleryItemPriceBox">
                  <div className="galleryItemPrice">Rs. {price}</div>
                  <button className="btn btn-primary">
                    <span>Order</span>
                  </button>
                </div>
                <p>lorem Ipsum</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryItem;
