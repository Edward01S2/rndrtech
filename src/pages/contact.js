import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'

import Layout from '../components/Layout'

const inputField = css`
  ${tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`};
`

class ContactPage extends React.Component {
  render() {
    const data = this.props.data.markdownRemark

    return (
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
        <form
          name="contact"
          className="mt-16"
          netlify-honeypot="bot-field"
          method="POST"
          data-netlify="true"
        >
          <p class="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-name"
              >
                Name
              </label>
              <input css={inputField} id="grid-name" type="text" required />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-email"
              >
                Email
              </label>
              <input css={inputField} id="grid-email" type="email" required />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-message"
              >
                Message
              </label>
              <textarea css={inputField} id="grid-message" rows="4" required />
            </div>
          </div>
          <div class="flex justify-end mb-6">
            <button
              class="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Contact" } }) {
      html
    }
  }
`
