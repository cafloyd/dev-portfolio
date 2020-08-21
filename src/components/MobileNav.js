import React, { Fragment } from 'react';
import { Flex, Image } from 'rebass/styled-components';
import { elastic as Menu } from 'react-burger-menu';
import Hide from './Hide';
import RouteLink from './RouteLink';
import Initials from './Logo/Initials.svg';

const MEDIA_QUERY_LARGE = '@media (min-width: 401px)';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
    zIndex: '10',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const MobileNav = () => (
  <Flex
    flexWrap="wrap"
    justifyContent="space-between"
    alignItems="center"
    p={3}
  >
    <Hide query={MEDIA_QUERY_LARGE}>
      <Menu>
        <Flex styles={styles} className="nav-bar">
          Hello
        </Flex>
      </Menu>
    </Hide>
  </Flex>
);

export default MobileNav;
