import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primary"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
    {/* <Triangle
      color="primary"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    /> */}
  </div>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ExperienceImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ExperienceTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const SingleExperience = ({
  company,
  companyLogo,
  title,
  startDate,
  endDate,
  location,
  // descriptionOfRole,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {title}
          </Title>
          <Text>
            {company}
          </Text>
        </span>
        {/* <Text>
          {`${startDate} - ${endDate}`}
        </Text> */}
        <Text my={2} pb={1}>
          <i>
            {location}
          </i>
        </Text>
        {/* <Text width={[1]} style={{ overflow: 'auto' }}>
          {descriptionOfRole}
        </Text> */}
      </TextContainer>

      <ImageContainer>
        <ExperienceImage src={companyLogo.image.src} alt={companyLogo.title} />
        <ExperienceTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            {/* <Box mx={1} fontSize={5}>
              <SocialLink
                name="Check repository"
                fontAwesomeIcon="github"
                url={repositoryUrl}
              />
            </Box>
            <Box mx={1} fontSize={5}>
              <SocialLink
                name="See experience"
                fontAwesomeIcon="globe"
                url={experienceUrl}
              />
            </Box> */}
          </Flex>
          {/* <ImageSubtitle bg="primary" color="white" y="bottom" x="right" round>
            {type}
          </ImageSubtitle> */}
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="backgroundDark">{`${startDate} - ${endDate}`}</ImageSubtitle>
          </Hide>
        </ExperienceTag>
      </ImageContainer>
    </Flex>
  </Card>
);

SingleExperience.propTypes = {
  company: PropTypes.string.isRequired,
  // descriptionOfRole: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  companyLogo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Experiences = () => (
  <Section.Container id="experience" Background={Background}>
    <Section.Header name="Work Experience" />
    <StaticQuery
      query={graphql`
        query ExperiencesQuery {
          contentfulAbout {
            experiences {
              id
              title
              company
              companyLogo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
              startDate(formatString: "MM / YYYY")
              endDate(formatString: "MM / YYYY")
              location
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.experiences.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <SingleExperience {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Experiences;
