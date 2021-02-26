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

const IGPage = () => (
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
            Links
          </Heading>
        </div>
        <div className="linksContainer">
          <a
            href="https://secure.actblue.com/donate/bail_funds_george_floyd"
            target="blank"
            className="igLink"
          >
            <button type="button" className="igButton">
              Split a Donation to 70+ Racial Justice Causes
            </button>
          </a>
          <a
            href="https://www.feedthemalik.com/post/dc-black-owned-open-covid-19"
            target="blank"
            className="igLink"
          >
            <button type="button" className="igButton">
              Black-Owned Restaurants in DC
            </button>
          </a>
          <a
            href="https://www.ihollaback.org/bystanderintervention/"
            target="blank"
            className="igLink"
          >
            <button type="button" className="igButton">
              Bystander Intervention Training
            </button>
          </a>
          <a
            href="https://www.advancingjustice-aajc.org/publication/resources-asian-american-community-anti-blackness"
            target="blank"
            className="igLink"
          >
            <button type="button" className="igButton">
              Resources for the Asian American Community on Anti-Blackness
            </button>
          </a>
          <a
            href="https://www.patreon.com/posts/37737054"
            target="blank"
            className="igLink"
          >
            <button type="button" className="igButton">
              Template for Employer Accountability
            </button>
          </a>
          <a
            href="https://drive.google.com/drive/folders/0Bz011IF2Pu9TUWIxVWxybGJ1Ync"
            target="blank"
            className="igLink"
          >
            <button type="button" className="igButton">
              Black History Month Education Resources
            </button>
          </a>
        </div>
      </Box>
      <Box className="footer">
        <button className="footerButton" type="button">
          <a
            href="https://www.instagram.com/caitlinfloyd"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FontAwesomeIcon name="fab fa-instagram" />
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

export default IGPage;
