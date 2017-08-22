import React from 'react';
import { EmailForm } from '../components/EmailForm';
import { TextAreaForm } from '../components/TextAreaForm';
import { TextForm } from '../components/TextForm';
import Axios from 'axios';
import Recaptcha from 'react-google-recaptcha';

const maxCharacterCount = 250;

var callback = function()
{
  console.log('testing/working');
};

export class ContactForm extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = ({values:{email:'', name:'', message:''}, error:{email: '', name: '', message: ''},
    valid:{email: true, name: true, message: true, captcha: false}, note:(0 + '/' + maxCharacterCount)});
    this.handleInput = this.handleInput.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  // pass the form information to the
  handleInput(type, value)
  {

    if(type === 'email')
    {
      // check the email
      if(value.match(/\/*@*.(com|ca)/i))
      {
        // valid email
        this.setState({values:{email: type}, error:{email: ''}, valid:{email: true}});
      }
      else if(value.length === 0)
      {
        this.setState({values:{email: type}, error:{email: 'you must enter in an email for me to reply to'}, valid:{email: false}});
      }
      else
      {
        this.setState({values:{email: type}, error:{email: 'please enter a valid email address'}, valid:{email:false}});
      }
    }

    else if(type === 'text')
    {
      this.setState({values:{name:type}});
    }

    else if(type === 'message')
    {
      if(value.length > maxCharacterCount)
      {
        this.setState({values:{message: type}, error:{message: 'you have exceeded the maximum number of characters'}, valid:{message: false}, note: input.length+'/'+maxCharacterCount});
        // this.setState({error: 'You have reached exceeded the maximum number of characters', assistant: input.length+'/'+maxCharacterCount});
      }
      else if(value.length === 0)
      {
        this.setState({values:{message: type}, error:{message: 'You must enter in a message'}, valid:{message:false},note: value.length+'/'+maxCharacterCount})
      }
      else
      {
        this.setState({values:{message: type}, error:{message: ''}, valid:{message:true}, note: (value.length+'/'+maxCharacterCount)});
      }
    }
  }

  sendEmail(e)
  {

    if(this.state.valid.email === true || this.state.valid.name === true || this.state.valid.message  === true)
    {
      Axios.post('/email',
      {
        email: this.state.values.email,
        name: this.state.values.name,
        message: this.state.values.message,
	g_recaptcha_response: this.state.g_recaptcha_response
      })
      .then(function (response)
      {
        console.log(response);
	if(response.status != 200)
          alert('Thank you for contacting me! Your email has been sent, expect a reply in the coming days');
      	
	else
	  alert("this part of the website is still under construction");   
      })
      .catch(function (error)
      {
        console.log(error);
        alert('Unfortunately something has gone wrong on my end :( I am looking into the problem and hopefully will fix it in the coming days)');
      });
    }
  }

  verifyCallback(res)
  {
    this.setState({'g_recaptcha_response': res});
  }

  loadCallback()
  {
    alert('starting');
  }

  /*
  Axios.post('/email',
  {
    email: ,
    name: ,
    message:
  })
  .then(function (response)
  {
    console.log(response);
    alert('Thank you for contacting me! Your email has been sent, expect a reply in the coming days');
  })
  .catch(function (error)
  {
    console.log(error);
    alert('Unfortunately something has gone wrong on my end :( I am looking into the problem and hopefully will fix it in the coming days)');
  });
  */

  render(){
    return (

      <div id='contact' style={{paddingTop: 80, height: 800, width:'min-content', margin:'auto'}}>
        <EmailForm error={this.state.error.email} inputHandler={this.handleInput} label='Email' />
        <TextForm error={this.state.error.name} inputHandler={this.handleInput} label='Name'/>
        <TextAreaForm error={this.state.error.message} inputHandler={this.handleInput} note={this.state.note} label='Message'/>
        <button onClick={this.sendEmail}>Submit</button>
	<Recaptcha
	  ref="recaptcha"
	  sitekey='6LdOpy0UAAAAAOgDQS9TUl7RuS5YhErxpGvmek-P'
	  onChange={this.verifyCallback} />
      </div>

    );
  }

}
