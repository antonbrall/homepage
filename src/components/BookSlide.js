import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  container,
  heading,
  image_container,
  text_container,
} from "./bookSlide.module.css";

const BookSlide = ({
  bookTitle,
  bookAuthor,
  bookCover,
  bookLink,
  children,
}) => {
  return (
    <div className={container}>
      <div className={image_container}>
        <GatsbyImage image={getImage(bookCover)} alt={bookTitle} />
      </div>
      <div className={text_container}>
        <h1 className={heading}>{bookTitle}</h1>
        <p>Author: {bookAuthor}</p>
        <a href={bookLink}>Read more</a>
        {children}
      </div>
    </div>
  );
};

export default BookSlide;
