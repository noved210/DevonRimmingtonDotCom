import React from 'react';

const ResumeStyle =
{
  width: '100%',
  height: 700,

};

export class Resume extends React.Component
{
  render()
  {
    return (
      <iframe src={this.props.src} frameBorder={this.props.frameBorder} style={ ResumeStyle }>
      </iframe>
    );
  }
}
