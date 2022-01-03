import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const PortfolioItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const PortfolioItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  margin: 16px;
  padding: 16px;
`

const PortfolioImg = styled.img`
  max-width: 100%;
`

const PortfolioItems = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpPortfolio {
          edges {
            node {
              slug
              title
              excerpt
              content
              featured_media {
                source_url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <PortfolioItemWrapper>
        {props.allWordpressWpPortfolio.edges.map(item => (
          <PortfolioItem key={item.node.id}>
            <h2>{item.node.title}</h2>
            <PortfolioImg
              src={item.node.featured_media.source_url}
              alt="Thumbnail"
            />
            <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
            <Link to={`/portfolio/${item.node.slug}`}>Weiterlesen</Link>
          </PortfolioItem>
        ))}
      </PortfolioItemWrapper>
    )}
  />
)

export default PortfolioItems
