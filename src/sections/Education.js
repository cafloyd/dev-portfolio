import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import SocialLink from '../components/SocialLink';
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
const EXPANDED_CARD_HEIGHT = 'auto';
const EXPANDED_CARD_WIDTH = '100%';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.sectionHeader} 5px solid;
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

const ExpandedTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - 200px);

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (200px / 2));
  }
`;

const DetailedTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
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

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
};

class SingleEducation extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    if (!this.state.expanded)
      return (
        <Card p={0} onClick={this.toggleExpand}>
          <Flex style={{ height: CARD_HEIGHT }}>
            <TextContainer style={containerStyle}>
              <span>
                <Title my={2} pb={1}>
                  {this.props.degree}
                </Title>
                <Text>{this.props.school}</Text>
              </span>
              <Text my={2} pb={1}>
                <FontAwesomeIcon name="map-marker" />
                <i>{` ${this.props.location}`}</i>
              </Text>
            </TextContainer>

            <ImageContainer>
              <EducationImage
                src={this.props.companyLogo.image.src}
                alt={this.props.companyLogo.title}
              />
              <EducationTag>
                <Hide query={MEDIA_QUERY_SMALL}>
                  <ImageSubtitle bg="backgroundDark">
                    {this.props.completionDate}
                  </ImageSubtitle>
                </Hide>
              </EducationTag>
            </ImageContainer>
          </Flex>
        </Card>
      );
    return (
      <Card p={0} width={EXPANDED_CARD_WIDTH} onClick={this.toggleExpand}>
        <Flex style={{ height: EXPANDED_CARD_HEIGHT, flexDirection: 'column' }}>
          <Flex height="200px">
            <ExpandedTextContainer style={containerStyle}>
              <span>
                <Title my={2} pb={1}>
                  {this.props.degree}
                </Title>
                <Text>{this.props.school}</Text>
              </span>
              <Text my={2} pb={1}>
                <FontAwesomeIcon name="map-marker" />
                <i>{` ${this.props.location}`}</i>
              </Text>
            </ExpandedTextContainer>

            <ImageContainer>
              <EducationImage
                src={this.props.companyLogo.image.src}
                alt={this.props.companyLogo.title}
              />
              <EducationTag>
                <Hide query={MEDIA_QUERY_SMALL}>
                  <ImageSubtitle bg="backgroundDark">
                    {this.props.completionDate}
                  </ImageSubtitle>
                </Hide>
              </EducationTag>
            </ImageContainer>
          </Flex>
          <DetailedTextContainer>
            {this.props.programDescription ? (
              <Text
                width={[1]}
                style={{
                  overflow: 'auto',
                  paddingBottom: '.5em',
                  display: 'flex',
                }}
              >
                <FontAwesomeIcon
                  name="caret-right"
                  style={{ paddingRight: '.5em' }}
                />
                {this.props.programDescription}
              </Text>
            ) : null}
            {this.props.youtubeLink1 ? (
              <div padding-top="56.25%">
                <Text
                  width={[1]}
                  style={{
                    overflow: 'auto',
                    paddingBottom: '.5em',
                    display: 'flex',
                  }}
                >
                  <FontAwesomeIcon
                    name="caret-right"
                    style={{ paddingRight: '.5em' }}
                  />
                  <a
                    href="https://caitlinamyfloyd.wordpress.com/sample-lesson-plans/"
                    style={{ paddingRight: '.25em' }}
                  >
                    Sample lesson plans{' '}
                  </a>
                  {' from the practicum'}
                </Text>
                <Text
                  width={[1]}
                  style={{
                    overflow: 'auto',
                    paddingBottom: '.5em',
                    display: 'flex',
                  }}
                >
                  <FontAwesomeIcon
                    name="caret-right"
                    style={{ paddingRight: '.5em' }}
                  />
                  Sample teaching videos from the practicum:
                </Text>
                <iframe
                  title={this.props.youtubeLink}
                  width="100%"
                  src={this.props.youtubeLink1}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : null}
            {this.props.youtubeLink2 ? (
              <div padding-top="56.25%">
                <iframe
                  title={this.props.youtubeLink}
                  width="100%"
                  src={this.props.youtubeLink2}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : null}
          </DetailedTextContainer>
          {this.props.programLink ? (
            <Flex
              style={{
                float: 'left',
              }}
            >
              <Box mx={1} fontSize={5} paddingLeft=".5em" paddingBottom=".5em">
                <SocialLink
                  name="Program Details"
                  fontAwesomeIcon="link"
                  url={this.props.programLink}
                />
              </Box>
            </Flex>
          ) : null}
        </Flex>
      </Card>
    );
  }
}

SingleEducation.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  completionDate: PropTypes.string.isRequired,
  programDescription: PropTypes.string,
  programLink: PropTypes.string,
  youtubeLink1: PropTypes.string,
  youtubeLink2: PropTypes.string,
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
              programDescription
              programLink
              youtubeLink1
              youtubeLink2
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
              <SingleEducation
                degree={p.degree}
                school={p.school}
                completionDate={p.completionDate}
                location={p.location}
                programDescription={p.programDescription}
                programLink={p.programLink}
                youtubeLink1={p.youtubeLink1}
                youtubeLink2={p.youtubeLink2}
                companyLogo={p.companyLogo}
              />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default AllEducation;
