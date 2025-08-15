import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import {
  container,
  heading,
} from './bookSlide.module.css'

const BookSlide = ({ bookTitle, bookAuthor, bookCover, bookLink, children }) => {
  console.log("BookSlide props:", { bookTitle, bookAuthor, bookCover, bookLink });
  return (
    <div className={`${container}`}>
      <div className="floatLeft">
        <GatsbyImage image={getImage(bookCover)} alt={bookTitle} />
      </div>
      <div className="floatLeft">
      <h1 className={heading}>{bookTitle}</h1>
      <p>Author: {bookAuthor}</p>
      <a href={bookLink}>Read more</a>
      </div>
      
      {children}
    </div>
  )
}

export default BookSlide