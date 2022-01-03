import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const ImageComponent = styled.img`
  max-width: 300px;
  margin: 0px 20px 0 0;
  float: left;
`

export default ({ pageContext }) => (
  <Layout>
    <div>
      <h1>{pageContext.title}</h1>
      <a rel="noreferrer" target="_blank" href={pageContext.acf.portfolio_url}>
        {pageContext.acf.portfolio_url}
      </a>
      <ImageComponent src={pageContext.featured_media.source_url} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </div>
  </Layout>
)
