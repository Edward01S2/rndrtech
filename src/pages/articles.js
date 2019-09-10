import React from 'react'
import { graphql } from 'gatsby'
import uuid from 'uuid'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'

import Layout from '../components/Layout'

const Content = styled.div`
  ${tw`mb-8`}
  p {
    ${tw`my-2 text-base leading-relaxed text-gray-700`};
  }
`

class Articles extends React.Component {
  render() {
    const md = this.props.data.md
    const { edges: articles } = this.props.data.post

    return (
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: md.html }} />
        <div className="pt-8">
          {articles.map(({ node: item }) => (
            <Content key={uuid.v4()}>
              <a
                className="text-xl font-bold no-underline hover:underline"
                href={`/articles${item.fields.slug}`}
              >
                {item.frontmatter.title}
              </a>
              <p>{item.frontmatter.excerpt}</p>
              <a
                className="text-gray-600 no-underline font-light text-sm hover:underline hover:text-black"
                href={`/articles${item.fields.slug}`}
              >
                Read this article &rarr;
              </a>
            </Content>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Articles

export const pageQuery = graphql`
  query {
    md: markdownRemark(frontmatter: { title: { eq: "Articles" } }) {
      html
    }
    post: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/posts/*.md" } }
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            excerpt
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
`
