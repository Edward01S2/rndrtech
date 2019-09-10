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

class Projects extends React.Component {
  render() {
    const md = this.props.data.md
    //const proj = this.props.data.proj.edges
    const { edges: projects } = this.props.data.proj
    //console.log(nodes)
    return (
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: md.html }} />
        <div className="pt-8">
          {projects.map(({ node: item }) => (
            <Content key={uuid.v4()}>
              <a
                className="text-xl font-bold no-underline hover:underline"
                href={item.frontmatter.link}
                target="_blank"
              >
                {item.frontmatter.title}
              </a>
              <div dangerouslySetInnerHTML={{ __html: item.html }} />
              <a
                className="text-gray-600 no-underline font-light text-sm hover:underline hover:text-black"
                href={item.frontmatter.link}
                target="_blank"
              >
                Visit this website &rarr;
              </a>
            </Content>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    md: markdownRemark(frontmatter: { title: { eq: "Projects" } }) {
      html
    }
    proj: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/projects/*.md" } }
      limit: 7
    ) {
      edges {
        node {
          frontmatter {
            title
            link
          }
          html
        }
      }
    }
  }
`
