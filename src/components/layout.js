import * as React from 'react'
import "../pages/mystyles.scss"

const Layout = ({ children }) => {
  return (
    <div class="container">
      

        <nav class="navbar" role='navigation' aria-label='main navigation'>
          <div class="navbar-menu">
            <a href="/" class="navbar-item">
              Home
            </a>
            <a href="/projects" class="navbar-item">
              Projects
            </a>
            <a href="/blog" class="navbar-item">
              Blog
            </a>
            <a href="/about" class="navbar-item">
              About
            </a>
          </div>

        </nav>

      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout