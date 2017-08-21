import React from 'react';
import { ImageHolderStyle } from './Styles/style';


export class ImageHolder extends React.Component
{

  render()
  {
    return (
      <div>
        <img style={ImageHolderStyle} src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

ImageHolder.propTypes = {
  src: React.PropTypes.string,
  alt: React.PropTypes.string
};

ImageHolder.defaultProps = {
  src: 'media/devonrimmington_placeholder.png',
  alt: 'Devon Rimmington Placeholder'
};
