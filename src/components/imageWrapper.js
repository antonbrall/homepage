import React from "react"
import { getSrc, getImage } from "gatsby-plugin-image"

function ImageWrapper(props) {
    console.log(props.image);
        console.log(props.alt);
        console.log(getSrc(props.image));
    return <div>
        <img src={props.image} alt={props.alt} />
    </div>;
}

export default ImageWrapper;