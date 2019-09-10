import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'

import Bio from '../components/Bio'
import Layout from '../components/Layout'

const navItem = css`
  ${tw`no-underline shadow-none py-2 text-base font-thin text-gray-500 px-4 hover:text-black`};
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt

    return (
      <Layout className="mx-auto">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Bio date={post.frontmatter.date} />
        <h1 className="text-4xl font-bold">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr className="mt-8 pb-2" />
        <div className="flex flex-wrap justify-center md:flex-row">
          <Link to={'/'} css={navItem}>
            Home
          </Link>
          <Link to={'/projects'} css={navItem}>
            Projects
          </Link>
          <Link to={'/services'} css={navItem}>
            Services
          </Link>
          <Link to={'/articles'} css={navItem}>
            Articles
          </Link>
          <Link to={'/contact'} css={navItem}>
            Contact
          </Link>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
