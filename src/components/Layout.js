import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Nav from '../components/Nav'

import "../css/style.scss";

const TemplateWrapper = ({ props, children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <div className={`px-8 py-6 md:px-16 md:py-12 lg:mx-auto lg:max-w-4xl lg:pl-32 lg:pt-20`}>
          <Nav />
          <div>{children}</div>
        </div>
      </div>
    )}
  />
);

export default TemplateWrapper;
