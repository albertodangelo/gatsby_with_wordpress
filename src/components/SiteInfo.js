import { graphql, StaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logo"

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: #fff;
  padding: 20px 0 20px 0;
`

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        {/*  <SiteTitle>
          {props.allWordpressSiteMetadata.edges[0].node.name}
        </SiteTitle> */}
        <Logo />
        <div>{props.allWordpressSiteMetadata.edges[0].node.description}</div>
      </SiteInfoWrapper>
    )}
  />
)

export default SiteInfo
