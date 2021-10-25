import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";
const ImageList = (props) => {
  const images = props.image.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  // console.log(props.image)
  return <div className="image-list">{images}</div>;
};
export default ImageList;
