/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from "./MainMenu"
import styled, { createGlobalStyle } from "styled-components"

import { graphql, StaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

`

const Layout = ({ children }) => (
  <>
    <StaticQuery
      query={graphql`
        {
          allWordpressWpFavicon {
            edges {
              node {
                url {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props => (
        <Helmet>
          <link
            rel="icon"
            href={props.allWordpressWpFavicon.edges[0].node.url.source_url}
          />
        </Helmet>
      )}
    />

    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </>
)

export default Layout
