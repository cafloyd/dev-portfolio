/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
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
      color="secondaryDark"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="secondary"
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
const EXPANDED_CARD_HEIGHT = 'auto'

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

const ExpandedTextContainer = styled.div`
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

class SingleExperience extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
    this.toggleExpand = this.toggleExpand.bind(this)
  }

  toggleExpand () {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    if (!this.state.expanded) return (
      <Card p={0} onClick={this.toggleExpand}>
        <Flex style={{ height: CARD_HEIGHT }}>
          <TextContainer>
            <span>
              <Title my={2} pb={1}>
                {this.props.title}
              </Title>
              <Text>
                {this.props.company}
              </Text>
            </span>

             <Text my={2} pb={1}>
              <FontAwesomeIcon name="map-marker" />
              <i>
                {` ${this.props.location}`}
              </i>
            </Text>
          </TextContainer>

          <ImageContainer>
            <ExperienceImage src={this.props.companyLogo.image.src} alt={this.props.companyLogo.title} />
            <ExperienceTag>
              <Hide query={MEDIA_QUERY_SMALL}>
                <ImageSubtitle bg="backgroundDark">{`${this.props.startDate} - ${this.props.endDate}`}</ImageSubtitle>
              </Hide>
            </ExperienceTag>
          </ImageContainer>
        </Flex>
      </Card>
    )
    return (
      <Card p={0} onClick={this.toggleExpand}>
        <Flex style={{ height: EXPANDED_CARD_HEIGHT }}>
          <TextContainer>
            <span>
              <Title my={2} pb={1}>
                {this.props.title}
              </Title>
              <Text>
                {this.props.company}
              </Text>
            </span>

             <Text my={2} pb={1}>
              <FontAwesomeIcon name="map-marker" />
              <i>
                {` ${this.props.location}`}
              </i>
            </Text>
          </TextContainer>

          <ImageContainer>
            <ExperienceImage src={this.props.companyLogo.image.src} alt={this.props.companyLogo.title} />
            <ExperienceTag>
              <Hide query={MEDIA_QUERY_SMALL}>
                <ImageSubtitle bg="backgroundDark">{`${this.props.startDate} - ${this.props.endDate}`}</ImageSubtitle>
              </Hide>
            </ExperienceTag>
          </ImageContainer>
        </Flex>
        <ExpandedTextContainer>
          {this.props.bullet1 ? <Text width={[1]} style={{ overflow: 'auto', paddingBottom: '.5em' }} color="text"><FontAwesomeIcon name="caret-right" /> {this.props.bullet1}</Text> : null}
          {this.props.bullet2 ? <Text width={[1]} style={{ overflow: 'auto', paddingBottom: '.5em' }} color="text"><FontAwesomeIcon name="caret-right" /> {this.props.bullet2}</Text> : null}
          {this.props.bullet3 ? <Text width={[1]} style={{ overflow: 'auto', paddingBottom: '.5em' }} color="text"><FontAwesomeIcon name="caret-right" /> {this.props.bullet3}</Text> : null}
          {this.props.bullet4 ? <Text width={[1]} style={{ overflow: 'auto', paddingBottom: '.5em' }} color="text"><FontAwesomeIcon name="caret-right" /> {this.props.bullet4}</Text> : null}
        </ExpandedTextContainer>
      </Card>
    );
  }
}


SingleExperience.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bullet1: PropTypes.string,
  bullet2: PropTypes.string,
  bullet3: PropTypes.string,
  bullet4: PropTypes.string,
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
              bullet1
              bullet2
              bullet3
              bullet4
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.experiences.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <SingleExperience title={p.title} company={p.company} companyLogo={p.companyLogo} startDate={p.startDate} endDate={p.endDate} location={p.location} bullet1={p.bullet1} bullet2={p.bullet2} bullet3={p.bullet3} bullet4={p.bullet4} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Experiences;
