import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import SiteInfo from "./SiteInfo"

const MainMenuInner = styled.div`
  max-width: 960px;
  display: flex;
  margin: 0 auto;
  width: 960px;
`

const LayoutWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27, 77);
`
const MenuItem = styled(Link)`
  color: #fff;
  display: flex;
  padding: 8px 16px;
  align-items: center;
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Hauptmenü" } }
        ) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <LayoutWrapper>
        <MainMenuInner>
          <SiteInfo />
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <MenuItem to={`/${item.object_slug}`} key={item.title}>
                {item.title}
              </MenuItem>
            )
          )}
        </MainMenuInner>
      </LayoutWrapper>
    )}
  />
)

export default MainMenu
