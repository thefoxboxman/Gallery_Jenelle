import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <footer>
        © {new Date().getFullYear()}, Built by John De Costa, "Head Web
        Wrangler" at
        <a href="https://www.eaglefox.com.au">... Eaglefox</a>
      </footer>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.8rem;
  a {
    color: whitesmoke;
  }
  a:link {
    color: whitesmoke;
    text-decoration: none;
  }

  a:visited {
    color: lightblue;
  }
`
