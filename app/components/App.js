import React from 'react';
import ReactDOM from 'react-dom';
import { AppStyle } from './Styles/style';
import { NavBar } from './NavBar';
import { ImageHolder } from './ImageHolder';
import { Bio } from './Bio';
import { Work } from './Work';
import { Resume } from './Resume';
import { ContactForm } from '../containers/ContactForm';
import { Footer } from './Footer';

export class App extends React.Component
{

  render()
  {
    return (
      <div>
      <NavBar />
      <div style={ AppStyle }>
        <h1 style={{textAlign:'center'}}>{this.props.title}</h1>
        <ImageHolder />
        <Bio />
        <Work />
        <Resume src='media/Resume.pdf' frameBorder={1} />
        <ContactForm  style={{paddingTop:'60'}} />
        <Footer />
      </div>
      </div>
    );
  }

}
