import React from 'react';

export class TextForm extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {error: ''};
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e)
  {
    this.props.inputHandler(e.target.value);
  }

  render()
  {
    return (

      <div>
        <label style={{display: 'inline'}}>{this.props.label}: </label><input type='text' onChange={this.inputHandler}/>
        <br/>
        <label style={{color: 'red'}}>{this.props.error}</label>
      </div>

    );
  }
}

TextForm.propTypes = {
  label: React.PropTypes.string
};

TextForm.defaultProps = {
  label: 'name'
};
