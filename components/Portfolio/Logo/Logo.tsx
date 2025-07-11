import React from 'react';
import * as Styled from './Logo.styles';
import Link from 'next/link';

export interface Props {
  isExpanded: boolean;
}

/**
 *Renders my animated logo
 *@function Logo
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Logo component
 */
const Logo = ({ isExpanded }: Props): JSX.Element => {
  return (
    <Styled.Container isExpanded={isExpanded}>
      <span className={'main-letter'}>O</span>
      <span className={'letter'}>m</span>
      <span className={'letter'}>&nbsp;</span>
      <span className={'letter'}>S</span>
      <span className={'letter'}>i</span>
      <span className={'letter'}>n</span>
      <span className={'letter'}>g</span>
      <span className={'letter'}>h</span>
      <Link href={'/portfolio'} passHref>
        <Styled.A />
      </Link>
    </Styled.Container>
  );
};

export default Logo;
