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
  isbn,
  children,
}) => {
  return (
    <div className={container}>
      <div className={image_container}>
        <GatsbyImage image={getImage(bookCover)} alt={bookTitle} />
      </div>
      <div className={text_container}>
        <h1 className={heading}>{bookTitle}</h1>
        {bookAuthor && <p>Autor: {bookAuthor}</p>}
        {isbn && <p>ISBN: {isbn}</p>}
        <a href={bookLink}>Mehr erfahren oder Buch kaufen</a>
        {children}
      </div>
    </div>
  );
};

export default BookSlide;
