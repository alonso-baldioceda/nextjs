import React from "react";

interface ImageModalData {
  title: string;
  url: string;
  explanation: string;
}

const ImageModal: React.FC<ImageModalData> = ({ title, url, explanation }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={url} alt={title} />
      <p>{explanation}</p>
    </div>
  );
};

export default ImageModal;
