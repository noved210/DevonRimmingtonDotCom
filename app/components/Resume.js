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
      <div id='resume'>
        <h2 style={{padding: '50px 15px 15px'}}>Resume</h2>
        <iframe src={this.props.src} frameBorder={this.props.frameBorder} style={ ResumeStyle }>
        </iframe>
      </div>
    );
  }
}
