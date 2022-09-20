import * as React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby';
import "../styles.css";

const Panel = styled.div`
  height: 400px;
  width: 300px;
  color: #002962;
  font-size: 20px;
  font-weight: bold;
  background-color: #CDCDCD;
  border-style: solid;
  border-width: 2px;
  border-color: #002962;
  border-radius: 5px;
  margin: 10px;
  margin-bottom: 20px;
  text-align: center;
  transition-duration: 0.4s;
  &:hover {
    background-color: #F6F6F6;
  }
`;
const Title = styled.div`
  margin-top: 20px;
`;
const Image = styled(GatsbyImage)`
  margin: 20px;
  border-width: 3px;
  border-color: #002962;
  border-radius: 3px;
`
const Description = styled.div`
  height: 115px;
  font-size: 16px;
  font-weight: normal;
  margin-left: 10px;
  margin-right: 10px;
  text-align: justify;
  display: flex;
  align-items: center;
`
const Date = styled.div`
  font-size: 12px;
  font-weight: normal;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`
const ProjectLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: normal;
  text-decoration: none;
  cursor: pointer;
  color: #002962;
`

const ProjectPanel = ({ title, date, img, link, children }) => {
  const image = getImage(img[0])
  return (
    <Panel>
        <Title>{title}</Title>
        <Image
          image={image}
          alt={img[1]}
          backgroundColor={"#CDCDCD"}
        />
      <Description>{img[1]}</Description>
      
      <Flex>
        <Date>{date}</Date>
        <ProjectLink to={link}>Read More...</ProjectLink>
      </Flex>
    </Panel>
  );
};
export default ProjectPanel;
