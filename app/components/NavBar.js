import React from 'react';
import { Link } from './Link';
import { NavBarStyle } from './Styles/style';

const navBarStyle =
{
  top:NavBarStyle.top,
  width:NavBarStyle.width
};

const home = {
  link: '#top',
  target: '_top',
  text: 'Home'
};

const bio = {
  link: '#bio',
  target: '_top',
  text: 'Bio'
};

const work = {
  link: '#work',
  target: '_top',
  text: 'Work'
};

const contact = {
  link: '#contact',
  target: '_top',
  text: 'Contact'
};

export class NavBar extends React.Component
{

  render(){

    return (

      <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top={NavBarStyle.dataOffSetTop} style={ navBarStyle }>
        <div className='conatiner-fluid'>
          <div className='conatiner-header'>
            <Link _className='navbar-brand' link={home.link} target={home.target} text={home.text} />
          </div>

          <ul className='nav navbar-nav'>
            <li><Link link={bio.link} target={bio.target} text={bio.text} /></li>
	    <li><Link link={'#resume'} target={bio.target} text='Resume' /></li>
            <li><Link link={contact.link} target={contact.target} text={contact.text} /></li>
          </ul>
        </div>
      </nav>

    );

  }

}
