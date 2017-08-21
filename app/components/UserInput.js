import React from 'react';

export class UserInput extends React.Component
{

  constructor(props){
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }


  inputHandler(e){
      this.props.inputHandler(e.target.value);
  }


  render()
  {

    if(this.props.type == 'email')
    {
      return (
        <div>
          <label style={{display: 'inline'}}>{this.props.label}: </label><input type={this.props.type} onChange={this.inputHandler}/>
          <br/>
          <label style={{color: 'red'}}>{this.props.error}</label>
        </div>
      );
    }

    else if(this.props.type == 'text')
    {
      return (
        <div>
          <label style={{display: 'inline'}}>{this.props.label}: </label><input type={this.props.type} onChange={this.inputHandler}/>
          <br/>
          <label style={{color: 'red'}}>{this.props.error}</label>
        </div>
      );
    }

    else if(this.props.type == 'textarea')
    {
      return (
        <div>
          <label style={{display: 'inline'}}>{this.props.label}: </label><textarea onChange={this.inputHandler}/>
          <label>{this.props.assistant}</label><br/>
          <label style={{color: 'red'}}>{this.props.error}</label>
        </div>
      );
    }

    return <p> null </p>;

  }
}

UserInput.propTypes = {
  type: React.PropTypes.string,
  label: React.PropTypes.string,
  inputHandler: React.PropTypes.func,
  assistant: React.PropTypes.string
};

UserInput.defaultProps = {
  type: 'text',
  label: 'input',
  assistant: ''
};
