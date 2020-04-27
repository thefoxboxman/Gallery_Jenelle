import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"

export const query = graphql`
  {
    allSanityPhotos(limit: 100, sort: { fields: datetime, order: DESC }) {
      edges {
        node {
          id
          datetime
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
// ...GatsbySanityImageFluid is inplace of src above
const IndexPage = ({ data }) => (
  <Layout>
    <BannerWapper>
      <div id="banner"></div>
      {/* <h1 id="banner">Jenelle's Photo Gallery</h1> */}
    </BannerWapper>

    <ul style={{ listStyle: "none" }}>
      {data.allSanityPhotos.edges.map(({ node: photo }) => (
        <li key={photo._id}>
          <DisplayWrapper>
            <div id="container">
              <div id="title">{photo.title}</div>
              <div id="image">
                <Image fluid={photo.image.asset.fluid} alt={photo.title} />
              </div>
              <div id="text">
                {photo.description}................{photo.datetime}
              </div>
            </div>
          </DisplayWrapper>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

/* CSS in JS Style Components */

const BannerWapper = styled.div`
  #banner {
    text-align: center;
    font-size: 0.75rem;
    padding-top: 4rem;
    /* margin: 0.5rem; */
    letter-spacing: 0.4rem;
    font-family: Roboto, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: italic;
  }
  /*600px and above style  with media query*/
  @media screen and (min-width: 600px) {
    #banner {
      text-align: center;
      font-size: 1rem;
      padding-top: 4rem;
      /* margin: 1rem; */
      letter-spacing: 0.4rem;
      font-family: Roboto, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: italic;
    }
  }
` /* end BannerWrapper */

const DisplayWrapper = styled.div`
  #container {
    /* grid area declarations */

    #title {
      grid-area: title;
    }
    #image {
      grid-area: image;
    }
    #text {
      grid-area: text;
    }

    display: grid;
    grid-template-columns: 1fr 1fr 20fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
    background-color: black;
    color: white;

    grid-template-areas:
      " . . title     . . "
      " . image image  image . "
      " . . text  . . ";

    #title {
      color: hsla(0, 22%, 93%, 1);
      margin: 0.25rem 0 0;
      padding-top: 0.25rem;
      text-align: center;
      text-transform: capitalize;
      font-size: 0.75rem;
      letter-spacing: 0.1rem;
      line-height: 0.9rem;
      font-family: Roboto, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: italic;
    }
    /*600px and above style  with media query*/
    @media screen and (min-width: 600px) {
      #title {
        color: hsla(0, 22%, 93%, 1);
        margin: 0.5rem 0 0;
        padding-top: 2rem;
        text-align: center;
        text-transform: capitalize;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        line-height: 0.9rem;
        font-family: Roboto, "Open Sans", "Helvetica Neue", sans-serif;
        font-style: italic;
      }
    }
    #image {
    }
    #text {
      color: hsla(0, 22%, 93%, 0.8);
      margin: 0.5rem 0;
      font-size: 0.7rem;
      letter-spacing: 0.1rem;
      line-height: 0.9rem;
      font-family: Roboto, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: italic;
    }
  }
` /* end DisplayWrapper */
