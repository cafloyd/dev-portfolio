/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import { ExpandedCard } from '../components/ExpandedCard'
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

const Background = () => (
  <div>
    <Triangle
      color="secondaryDark"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
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
  background: rgba(255, 255, 255, 0.3);
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
  height: 200px;
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

// const videoSize = {
//   width: 100%,
//   // height: width/2,
// };


const ProjectImage = styled(Image)`
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

const ProjectTag = styled.div`
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
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
}

class Project extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
    this.toggleExpand = this.toggleExpand.bind(this)
  }

  toggleExpand() {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      expanded: !this.state.expanded
    })
  }

  render() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    if (!this.state.expanded) return (
      <Card p={0} onClick={this.toggleExpand}>
        <Flex style={{ height: CARD_HEIGHT }}>
          <TextContainer style={containerStyle}>
            <span>
              <Title my={2} pb={1} color="text">
                {this.props.name}
              </Title>
            </span>
            <Text width={[1]} style={{ overflow: 'auto' }} color="text">
              {this.props.description}
            </Text>
            <Flex
              style={{
                float: 'left',
              }}
            >
              <Box mx={1} fontSize={5}>
                <SocialLink
                  name="Check repository"
                  fontAwesomeIcon="github"
                  url={this.props.repositoryUrl}
                />
              </Box>
              <Box mx={1} fontSize={5}>
                <SocialLink
                  name="See project"
                  fontAwesomeIcon="globe"
                  url={this.props.projectUrl}
                />
              </Box>
            </Flex>
          </TextContainer>

          <ImageContainer>
            <ProjectImage src={this.props.logo.image.src} alt={this.props.logo.title} />
            <ProjectTag>
              <ImageSubtitle bg="primary" color="white" y="bottom" x="right">
                {this.props.type}
              </ImageSubtitle>
              <Hide query={MEDIA_QUERY_SMALL}>
                <ImageSubtitle bg="backgroundDark">{this.props.publishedDate}</ImageSubtitle>
              </Hide>
            </ProjectTag>
          </ImageContainer>
        </Flex>
      </Card>
    )
    return (
      <ExpandedCard p={0} width={EXPANDED_CARD_WIDTH} onClick={this.toggleExpand}>
        <Flex style={{ height: EXPANDED_CARD_HEIGHT, flexDirection: "column" }}>
          <Flex height="200px">
            <ExpandedTextContainer style={containerStyle}>
              <span>
                <Title my={2} pb={1} color="text">
                  {this.props.name}
                </Title>
              </span>
              <Text width={[1]} style={{ overflow: 'auto' }} color="text">
                {this.props.description}
              </Text>
              <Flex
                style={{
                  float: 'left',
                }}
              >
                <Box mx={1} fontSize={5}>
                  <SocialLink
                    name="Check repository"
                    fontAwesomeIcon="github"
                    url={this.props.repositoryUrl}
                  />
                </Box>
                <Box mx={1} fontSize={5}>
                  <SocialLink
                    name="See project"
                    fontAwesomeIcon="globe"
                    url={this.props.projectUrl}
                  />
                </Box>
              </Flex>
            </ExpandedTextContainer>

            <ImageContainer style={containerStyle}>
              <div>
                <ProjectImage src={this.props.logo.image.src} alt={this.props.logo.title} />
                <ProjectTag>
                  <ImageSubtitle bg="primary" color="white" y="bottom" x="right">
                    {this.props.type}
                  </ImageSubtitle>
                  <Hide query={MEDIA_QUERY_SMALL}>
                    <ImageSubtitle bg="backgroundDark">{this.props.publishedDate}</ImageSubtitle>
                  </Hide>
                </ProjectTag>
              </div>
            </ImageContainer>
          </Flex>
          {this.props.youtubeLink ? <div padding-top="56.25%"><iframe title={this.props.youtubeLink} width="100%" src={this.props.youtubeLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div> : null}
          <DetailedTextContainer>
            {this.props.bullet1 ? (
              <Text width={[1]} style={{ overflow: 'auto', paddingBottom: '.5em', display: 'flex' }}>
                <FontAwesomeIcon name="caret-right" style={{paddingRight: ".5em"}} />
                {this.props.bullet1}
              </Text>
            ) : null}
            {this.props.bullet2 ? (
              <Text width={[1]} style={{ overflow: 'auto', paddingBottom: '.5em', display: 'flex' }}>
                <FontAwesomeIcon name="caret-right" style={{paddingRight: ".5em"}} />
                {this.props.bullet2}
              </Text>
            ) : null}
            {this.props.bullet3 ? (
              <Text width={[1]} style={{ overflow: 'auto', paddingBottom: '.5em', display: 'flex' }}>
                <FontAwesomeIcon name="caret-right" style={{paddingRight: ".5em"}} />
                {this.props.bullet3}
              </Text>
            ) : null}
            {this.props.bullet4 ? (
              <Text width={[1]} style={{ overflow: 'auto', paddingBottom: '.5em', display: 'flex' }}>
                <FontAwesomeIcon name="caret-right" style={{paddingRight: ".5em"}} />
                {this.props.bullet4}
              </Text>
            ) : null}
          </DetailedTextContainer>
        </Flex>
      </ExpandedCard>
    )
  }
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bullet1: PropTypes.string,
  bullet2: PropTypes.string,
  bullet3: PropTypes.string,
  bullet4: PropTypes.string,
  youtubeLink: PropTypes.string,
  projectUrl: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Projects = () => (
  <Section.Container id="projects" Background={Background}>
    <Section.Header name="Projects" />
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          contentfulAbout {
            projects {
              id
              name
              description
              bullet1
              bullet2
              bullet3
              youtubeLink
              projectUrl
              repositoryUrl
              publishedDate(formatString: "MM / YYYY")
              type
              logo {
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
          {contentfulAbout.projects.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <Project name={p.name} description={p.description} projectUrl={p.projectUrl} repositoryUrl={p.repositoryUrl} publishedDate={p.publishedDate} type={p.type} logo={p.logo} bullet1={p.bullet1} bullet2={p.bullet2} bullet3={p.bullet3} bullet4={p.bullet4} youtubeLink={p.youtubeLink} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Projects;
