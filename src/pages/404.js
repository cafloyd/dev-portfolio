import React from 'react';
import { Heading, Box, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import Tanuki from '../components/Logo/Tanuki.png';

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

const ErrorImage = styled(Image)`
  border-radius: 50%;
  padding: 40px;
  margin-top: 0px;
`;

const NotFoundPage = () => (
  <Layout>
    <Section.Container id="404" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="primary" fontSize={['3rem', '4rem', '5rem']} as="h1">
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
        <a href="https://www.instagram.com/princess_tanuki/">
          <ErrorImage
            src={Tanuki}
            alt="A coonhound mix puppy looking at you lovingly"
          />
        </a>
      </Box>
    </Section.Container>
  </Layout>
);

export default NotFoundPage;
