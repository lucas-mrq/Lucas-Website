import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/layout'
import ProjectPanel from '../../../components/projectPanel'
import styled from "styled-components"

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Project = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
      <Flex>{data.allMdx.nodes.map((node) => <ProjectPanel key={node.id} 
                                                    title={node.frontmatter.title} 
                                                    link={`/en/project/${node.slug}`} 
                                                    date={node.frontmatter.date} 
                                                    img={[node.frontmatter.hero_image, node.frontmatter.hero_image_alt]}/>
      )}</Flex>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`
export default Project