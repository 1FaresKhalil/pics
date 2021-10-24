import React from "react";
const ImageList = (props) => {
  const images = props.image.map(({description,id,urls}) => (
    <img key={id} alt={description} src={urls.regular}></img>
  ));
  // console.log(props.image)
  return <div>{images}</div>;
};
export default ImageList;
