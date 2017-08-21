import React from 'react';
import { LinkStyle } from './Styles/style';

const linkStyle = {
  color: LinkStyle.color,
  padding: LinkStyle.padding,
  background: LinkStyle.background
};

export class Link extends React.Component
{

  render()
  {
    return (<a className={this.props._className} href={this.props.link} target={this.props.target}>{this.props.text}</a>);
  }

}

Link.propTypes = {
  link: React.PropTypes.string,
  target: React.PropTypes.string,
  text: React.PropTypes.string,
  className: React.PropTypes.string
};

Link.defaultProps = {
  link: '#',
  target: '_blank',
  text: '*link text goes here*',
  className: ''
};
