import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'

import Layout from '../components/Layout'

const inputField = css`
  ${tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`};
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      isValidated: false,
      isSubmitted: false, 
    }
    this.baseState = this.state;
  }

  resetForm = () => {
    this.setState(this.baseState)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        this.setState({isSubmitted: true})
      })
      //navigate(form.getAttribute('action'))
      .catch(error => alert(error))
  }

  render() {
    const data = this.props.data.markdownRemark

    return (
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
        <div className={`mt-12 ${this.state.isSubmitted ? '' : 'hidden'}`}>
          <p className="text-xl font-bold">Your message has been sent. Thank you for getting in touch! </p>
        </div>
        <form
          name="contact"
          className={`mt-12 ${this.state.isSubmitted ? 'hidden' : ''}`}
          action="/contact/thanks/"
          netlify-honeypot="bot-field"
          method="POST"
          data-netlify="true"
          onSubmit={this.handleSubmit}
        >
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input type="hidden" name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Name
              </label>
              <input css={inputField} id="grid-name" name="name" type="text" onChange={this.handleChange} required />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input css={inputField} id="grid-email" type="email" name="email" onChange={this.handleChange} required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                Message
              </label>
              <textarea css={inputField} id="grid-message" name="message" rows="4" onChange={this.handleChange} required />
            </div>
          </div>
          <div className="flex justify-end mb-6">
            <button
              className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
