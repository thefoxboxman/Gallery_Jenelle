import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"

export const query = graphql`
  {
    allSanityPhotos(filter: { flowers: { eq: true } }) {
      edges {
        node {
          _id
          date
          title
          description
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

const FlowersPage = ({ data }) => (
  <Layout>
    <BannerWapper>
      <h1 id="banner">Jenelle's Photo Gallery</h1>
      <h2 id="banner">Flowers</h2>
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
                {photo.description}................{photo.date}
              </div>
            </div>
          </DisplayWrapper>
        </li>
      ))}
    </ul>
  </Layout>
)

export default FlowersPage

/* CSS in JS Style Components */

const BannerWapper = styled.div`
  #banner {
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem;
    letter-spacing: 0.1rem;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
` /* end BannerWrapper */

const DisplayWrapper = styled.div`
  /* MEDIA QUERY FOR LARGE SCEENS */
  @media screen and (min-width: 992px) {
    #container {
      #image {
        grid-area: image;
      }

      display: grid;
      border: 1px solid #000;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

      grid-template-areas: ". image .";
    }
  }

  /* MOBILE FIRST LAYOUT */
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
      margin: 0.5rem 0 0;
      padding-top: 2rem;
      text-align: center;
      text-transform: capitalize;
      font-size: 1rem;
      letter-spacing: 0.1rem;
      line-height: 0.9rem;
      font-family: Georgia, "Times New Roman", Times, serif;
    }

    #image {
    }
    #text {
      color: hsla(0, 22%, 93%, 0.8);
      margin: 0.5rem 0;
      font-size: 0.7rem;
      letter-spacing: 0.1rem;
      line-height: 0.9rem;
      font-family: Georgia, "Times New Roman", Times, serif;
    }
  }
` /* end DisplayWrapper */
