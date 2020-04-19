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

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT}

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const SkillImage = styled(Image)`
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

const SkillTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Skill = ({
  skillName,
  skillImage
}) => (
  <StaticCard p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <ImageContainer>
        <SkillImage src={skillImage.image.src} alt={skillName} />
        <SkillTag>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="primary" color="white" y="bottom" x="right">
              {skillName}
            </ImageSubtitle>
          </Hide>
        </SkillTag>
      </ImageContainer>
    </Flex>
  </StaticCard>
);

Skill.propTypes = {
  skillName: PropTypes.string.isRequired,
  skillImage: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Skills = () => (
  <Section.Container id="skills" Background={Background}>
    <Section.Header name="Skills" />
    <StaticQuery
      query={graphql`
        query TechnicalSkillsQuery {
          contentfulAbout {
            technicalSkills {
              id
              skillName
              skillImage {
                title
                image: resize(width: 200, height: 200, quality: 100) {
                  src
                }
              }
            }
            languageSkills {
              id
              skillName
              skillImage {
                title
                image: resize(width: 200, height: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <div>
          <Title margin="1em">
            Technical Skills
          </Title>
          <CardContainer minWidth="200px">
            {contentfulAbout.technicalSkills.map((p, i) => (
              <Fade bottom delay={i * 50} key={p.id}>
                <Skill skillName={p.skillName} skillImage={p.skillImage} />
              </Fade>
            ))}
          </CardContainer>
          <Title margin="1em" marginTop="2em">
            Language Skills
          </Title>
          <CardContainer minWidth="200px">
            {contentfulAbout.languageSkills.map((p, i) => (
              <Fade bottom delay={i * 100} key={p.id}>
                <Skill skillName={p.skillName} skillImage={p.skillImage} />
              </Fade>
            ))}
          </CardContainer>
        </div>
      )}
    />
  </Section.Container>
);

export default Skills;
