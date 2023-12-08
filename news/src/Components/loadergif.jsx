import React from "react";
import loaderImage from "./assets/Spinner-2.gif";

export default function LoaderGif() {
  return (
    <div className="d-flex justify-content-center my-3">
      <img src={loaderImage} alt="Loading..."/>
    </div>
  );
}
