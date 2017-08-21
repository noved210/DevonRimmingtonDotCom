import React from 'react';
import { BioStyle } from './Styles/style';

export class Bio extends React.Component
{
  render()
  {
    return (

      <div id='bio' style={ BioStyle }>
      <h2>My motivation</h2>
      <p>
      Writing great software is as much an art as a science. I possess a high level of precision and attention to detail;
      the scientific components of development come naturally to me.  I am innovative and can work through problems in order to make
      something new; I can tackle the more creative elements of writing software.
      </p>

      <br/>
      <br/>

      <p>
      Programming is like building a house. Many talented people must come together and agree upon plans. They must build on a strong
      foundation based on a reliable framework, and place the pipes and electrical to put the correct information where it needs to be.
      Customized design features are chosen to keep the user’s happy. I am able to execute and participate in each of these steps;
      I am a hard worker and have strong communication skills.
      </p>

      <br/>
      <br/>

      <p>
      I May of 2017 I graduated from Dalhousie’s computer science program - with a specialization in Game Development, Animation, and Graphics.
      This gives me a strong background in math, realtime interactive software, and pipelines/lifecycles. In school I also took a course load
      heavily weighted towards internet technologies and web development.

      I look forward to working in mobile and application development with the goal of being a full stack developer.

      </p>
      </div>

    );
  }
}
