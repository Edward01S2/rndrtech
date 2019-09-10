import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'

const bioContent = css`
  ${tw`text-xs mb-0 leading-tight text-gray-500 font-thin md:text-base`};
`

class Bio extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query BioDataQuery {
            dataJson {
              name
              profilePic
              bio
            }
          }
        `}
        render={data => (
          <div className="flex flex-row items-center mb-8 md:mb-12"
          >
            <img
              className="object-cover h-16 w-16 rounded-full mb-0"
              src={data.dataJson.profilePic}
              alt={data.dataJson.name}
            />
            <div className="text-base pl-4 md:pl-4">
              <h3 className="font-semibold leading-normal">{data.dataJson.name}</h3>
              <p css={bioContent}>{data.dataJson.bio}</p>
              <p css={bioContent}>{this.props.date}</p>
            </div>
          </div>
        )}
      />
    )
  }
}

export default Bio
