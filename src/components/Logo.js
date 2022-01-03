import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const LogoImg = styled.img`
  width: 150px;
  margin: 0;
  padding: 0;
`

const Logo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpLogo {
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
    render={props =>
      props.allWordpressWpLogo.edges.map(item => (
        <Link to={"/"}>
          <LogoImg src={item.node.url.source_url} alt="Logo" />
        </Link>
      ))
    }
  />
)

export default Logo
