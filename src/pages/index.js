import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

class HomePage extends React.Component {
  render() {
    const data = this.props.data.markdownRemark

    return (
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Home" } }) {
      html
    }
  }
`
