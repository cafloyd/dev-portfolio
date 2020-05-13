import React, { Fragment, Component } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import Hide from './Hide';
import RouteLink from './RouteLink';
import Initials from './Logo/Initials.svg';
import FontAwesomeIcon from 'react-fontawesome';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const MEDIA_QUERY_LARGE = '@media (min-width: 401px)';
const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${(props) => props.theme.colors.secondaryDark};
  }

  position: absolute;
  width: 100%;
`;

const formatLinks = (allLinks) =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );
const sticky = {
  position: 'fixed',
  top: 0,
  width: '100%',
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
    };
    this.toggleShowNav = this.toggleShowNav.bind(this);
  }

  toggleShowNav() {
    this.setState({
      showNav: !this.state.showNav,
    });
  }

  render() {
    return (
      <HeaderContainer style={sticky}>
        <Fade top>
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            p={3}
          >
            <SectionLinks>
              {({ allLinks }) => {
                const { home, links } = formatLinks(allLinks);

                const homeLink = home && (
                  <Image
                    src={Initials}
                    width="50px"
                    alt="Portfolio Logo"
                    onClick={home.onClick}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                );
                const navLinks = links.map(({ name, value }) => (
                  <RouteLink
                    key={name}
                    onClick={value.onClick}
                    selected={value.selected}
                    name={name}
                  />
                ));

                return (
                  <Fragment>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // width: '100%',
                      }}
                      className="menu-bar"
                    >
                      {homeLink}
                      <Hide query={MEDIA_QUERY_LARGE}>
                        {this.state.showNav ? (
                          <FontAwesomeIcon
                            name="times"
                            style={{ color: 'white', paddingRight: '1em' }}
                            onClick={this.toggleShowNav}
                          />
                        ) : (
                          <FontAwesomeIcon
                            name="bars"
                            style={{ color: 'white', paddingRight: '1em' }}
                            onClick={this.toggleShowNav}
                          />
                        )}
                      </Hide>
                    </div>
                    {this.state.showNav ? (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          width: '100%',
                        }}
                      >
                        <Fade right>
                          <Flex className="nav-bar">{navLinks}</Flex>
                        </Fade>
                      </div>
                    ) : null}
                    <Hide query={MEDIA_QUERY_SMALL}>
                      <Flex className="nav-bar">{navLinks}</Flex>
                    </Hide>
                  </Fragment>
                );
              }}
            </SectionLinks>
          </Flex>
        </Fade>
      </HeaderContainer>
    );
  }
}

export default Header;
