import React from 'react';
import FontAwesomeIcon from 'react-fontawesome';
import { Heading, Box } from 'rebass/styled-components';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import '../../static/font-awesome-custom/interests.css';
import '../../static/font-awesome-custom/ig.css';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);

const ResourcesPage = () => (
  <Layout>
    <Section.Container id="ig" Background={Background}>
      <Box width={[320, 400, 600]} m="auto" className="igBox">
        <div className="igHeadings">
          <Heading
            color="primaryMedium"
            textAlign="center"
            fontSize={[5, 6]}
            as="h1"
            paddingBottom=".3em"
          >
            Caitlin Floyd
          </Heading>
          <Heading
            color="primary"
            fontSize={[4, 5]}
            as="h2"
            textAlign="center"
            paddingBottom="1em"
          >
            Resources
          </Heading>
        </div>
        <div className="linksContainer">
          <a
            href="https://caitlinfloyd.notion.site/Tips-Resources-for-Early-Career-Devs-3132541c8a594708837e5ba7ae7251a5"
            target="blank"
            className="igLink"
          >
            <button type="button" className="igButton">
              Tips & Resources for Early-Career Devs
            </button>
          </a>
        </div>
      </Box>
      <Box className="footer">
        <button className="footerButton" type="button">
          <a
            href="https://www.linkedin.com/in/caitlinfloyd/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FontAwesomeIcon name="fab fa-linkedin" />
          </a>
        </button>
        <button className="footerButton" type="button">
          <a
            href="https://github.com/cafloyd"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FontAwesomeIcon name="fab fa-github" />
          </a>
        </button>
        <button className="footerButton" type="button">
          <a
            href="https://caitlinfloyd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FontAwesomeIcon name="fab fa-globe" />
          </a>
        </button>
      </Box>
    </Section.Container>
  </Layout>
);

export default ResourcesPage;
