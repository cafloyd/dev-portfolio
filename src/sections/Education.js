import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import { CardContainer, StaticCard } from '../components/StaticCard';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

const Background = () => (
  <div>
    <Triangle
      color="secondaryDark"
      height={['50vh', '40vh']}
      width={['70vw', '70vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.sectionHeader} 5px solid;
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

const EducationImage = styled(Image)`
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

const EducationTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const SingleEducation = ({
  degree,
  school,
  companyLogo,
  completionDate,
  location,
}) => (
  <StaticCard p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {degree}
          </Title>
          <Text>
            {school}
          </Text>
        </span>
        <Text my={2} pb={1}>
          <FontAwesomeIcon name="map-marker" />
          <i>
            {` ${location}`}
          </i>
        </Text>
      </TextContainer>

      <ImageContainer>
        <EducationImage src={companyLogo.image.src} alt={companyLogo.title} />
        <EducationTag>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="backgroundDark">{completionDate}</ImageSubtitle>
          </Hide>
        </EducationTag>
      </ImageContainer>
    </Flex>
  </StaticCard>
);

SingleEducation.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  completionDate: PropTypes.string.isRequired,
  companyLogo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const AllEducation = () => (
  <Section.Container id="education" Background={Background}>
    <Section.Header name="Education" />
    <StaticQuery
      query={graphql`
        query AllEducationQuery {
          contentfulAbout {
            allEducation {
              id
              degree
              school
              completionDate(formatString: "YYYY")
              location
              companyLogo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.allEducation.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <SingleEducation {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default AllEducation;
