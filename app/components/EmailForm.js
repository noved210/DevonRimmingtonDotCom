import React from 'react';

export class EmailForm extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {error: ''};
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e)
  {
    this.props.inputHandler('email', e.target.value);
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

EmailForm.propTypes = {

};

EmailForm.defaultProps = {

};
