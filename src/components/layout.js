import * as React from "react";
import { Link , useStaticQuery, graphql } from 'gatsby';
import styled from "styled-components";
import "../styles.css";

const ContentArea = styled.main`
  height: 85vh;
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-y: scroll;
  overflow-x: hidden;
`;
const NavLink = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  width: 100%;
`;
const Button = styled(Link)`
  background-color: ${(props) => (props.current===0 ? `#002962;` : "#CDCDCD;")}
  color: ${(props) => (props.current===0 ? `#CDCDCD;` : "#002962;")}
  font-weight: 500;
  border-style: solid;
  border-width: 1.5px;
  border-color: #002962;
  width: ${(props) => (props.flag===5 ? `40px;` : `23%;`)}
  height: 40px;
  margin-right: ${(props) => (props.flag===5 ? `10px;` : `5px;`)}
  margin-left: ${(props) => (props.rank===0 ? `10px;` : `5px;`)}
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 22px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #002962;
    color: #CDCDCD;
  }
`;
const CenterText = styled.div`
  margin-top: 7px;
`;
const BottomArea = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  padding-top: 6px;
  border-style: solid;
  border-width: 1px 0 0 0;
  border-color: #002962;
`;
const BottomLink = styled(Link)`
  font-size: 14px;
  color: #002962;
  text-decoration: none;
  cursor: pointer;
`;

const Layout = ({ pageTitle, children }) => {
  const listMenu = [["Home","/"], ["Projects", "/en/project"], ["Experience","/en/experience"], ["Hobbys","/en/hobbys"]]
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav>
        <NavLink>
          {listMenu.map((item, index) => <Button key={index} current={pageTitle===item[0] ? 0 : 1} rank={index} to={item[1]}><CenterText>{item[0]}</CenterText></Button>)}
          <Button flag={5} to={"/"}>
            <CenterText>Flag</CenterText>
          </Button>
        </NavLink>
      </nav>
      <ContentArea>
        {children}
      </ContentArea>
      <BottomArea>
        <BottomLink to="/contact">About</BottomLink>
      </BottomArea>
    </div>
  );
};
export default Layout;
