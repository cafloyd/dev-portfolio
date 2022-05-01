import React from 'react';
import FontAwesomeIcon from 'react-fontawesome';
import { Heading, Box, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import Tanuki from '../components/Logo/Tanuki.png';
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
      color="primaryDark"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);
const ERROR_SM = '300px';
const ERROR_MD = '400px';
const ERROR_LG = '450px';

const ErrorImage = styled(Image)`
  border-radius: 50%;
  padding: 40px;
  margin: 0 auto;
`;

const NotFoundPage = () => (
  <Layout>
    <Section.Container
      class="notFoundContainer"
      id="404"
      Background={Background}
    >
      <Box width={[ERROR_SM, ERROR_MD, ERROR_LG]} m="auto">
        <Heading color="primary" fontSize={['3rem', '4rem', '4rem']} as="h1">
          404
        </Heading>
        <Heading
          color="primaryMedium"
          fontSize={['1rem', '1rem', '2rem']}
          as="h2"
        >
          I couldn&apos;t find what you were looking for, but I did find a cute
          puppy!
        </Heading>
        <Heading
          color="primaryLight"
          fontSize={['.75rem', '.75rem', '1.5rem']}
          as="h3"
        >
          <a href="https://caitlinfloyd.com">
            <FontAwesomeIcon
              name="arrow-left"
              style={{ marginTop: '2rem', marginRight: '.5rem' }}
            />
            Home
          </a>
        </Heading>
        <a href="https://www.instagram.com/princess_tanuki/" margin="auto">
          <ErrorImage
            width={[ERROR_SM, ERROR_MD, ERROR_LG]}
            height={[ERROR_SM, ERROR_MD, ERROR_LG]}
            src={Tanuki}
            alt="A coonhound mix puppy looking at you lovingly"
          />
        </a>
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

export default NotFoundPage;
