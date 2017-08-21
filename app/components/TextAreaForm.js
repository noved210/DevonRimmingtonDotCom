import React from 'react';

export class TextAreaForm extends React.Component
{

  constructor(props)
  {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);

  }

  inputHandler(e)
  {
      this.props.inputHandler('message', e.target.value);
  }

  render()
  {

    return (

      <div>
        <label style={{display: 'inline'}}>{this.props.label}: </label><textarea onChange={this.inputHandler}/>
        <label>{this.props.note}</label><br/>
        <label style={{color: 'red'}}>{this.props.error}</label>
      </div>

    );
  }

}

TextAreaForm.propTypes = {

};

TextAreaForm.defaultProps = {

};
