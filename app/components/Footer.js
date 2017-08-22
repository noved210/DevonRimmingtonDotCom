import React from 'react';

export class Footer extends React.Component
{

  render()
  {
    return (
      <div style={{padding:'80px 15px 15px'}}  id='contact'>
        <p>Website by Devon Rimmington</p>
	<div style={{display:'inline'}}>
	  <label>Email Address: </label><p style={{display:'inherit', marginLeft:10}}>devonrimmington@gmail.com</p><br/>
	  <label>Phone Number: </label><p style={{display:'inherit', marginLeft:10}}>(902) 989 1285</p><br/>
	  <label>LinkedIn: </label><p style={{display:'inherit'}}><a style={{marginLeft:10}} href='https://www.linkedin.com/in/devon-rimmington-6301a0b1/'>Devon Rimmington</a></p>
	</div>
      </div>
    );
  }

}
