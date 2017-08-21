import React from 'react';
import {ImageHolder} from './ImageHolder';
import {WorkStyle} from './Styles/style';

export class Work extends React.Component
{

  render()
  {
    return (
      <div id='work' style={WorkStyle}>
        <h2>Past Work</h2>
        <ImageHolder />
        <br/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra semper dolor non pharetra. Ut dui enim, porta in felis rutrum,
          hendrerit interdum lacus. Phasellus a luctus neque. Suspendisse tempor mi nec justo bibendum tempor. Cras hendrerit,
          lorem quis maximus fringilla, velit libero interdum est, nec fringilla nisi urna vel libero. Ut posuere dictum dolor
          porttitor tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis purus vel felis euismod,
          ac dignissim justo congue. Aenean leo ipsum, tempor eget eros non, euismod ultricies nunc. Etiam mollis, nunc non interdum
          fringilla, magna nisi feugiat eros, in auctor augue velit nec quam. Aenean vitae pulvinar leo, vitae scelerisque augue.
          <br/>
          <br/>
          Nullam commodo metus vitae tellus convallis vulputate. Sed at velit nec nulla consectetur placerat. Aenean
          ut est id dolor iaculis fringilla sed ac magna. Suspendisse ac tristique turpis. Phasellus viverra diam eget erat tristique,
          quis vestibulum felis aliquet. Vivamus vitae enim eget dolor ullamcorper lobortis et ac risus. Maecenas egestas laoreet euismod.
          Nulla accumsan est ligula, nec mattis mauris facilisis sed. Integer nec nibh feugiat, facilisis eros ac, rutrum mauris. Nulla interdum,
          lacus eu fringilla convallis, neque justo tincidunt elit, in sodales eros libero sit amet magna. Vestibulum vestibulum enim ex, id dignissim mi
          viverra a. In ut sapien vitae nisi dignissim scelerisque. Nullam quis dapibus nulla, a sagittis ligula. Pellentesque sit amet ipsum vel nisi
          suscipit blandit tincidunt eu dui. Nam vitae luctus nisl, eleifend fringilla purus. Donec fringilla volutpat cursus.
        </p>
      </div>
    );
  }

}
