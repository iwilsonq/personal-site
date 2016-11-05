import React, { Component } from 'react';
import './footer.sass';

export default class Footer extends Component {
  render() {

    return (
      <div className='footer'>
        <p className='copyright'>&copy; Ian Wilson</p>
        <p className='contact-email'>questions.<span className="method">map</span>(<span className="arrow-arg">question</span> => Email.<span className="method">compose</span>(<a href="mailto:iwilsonq@gmail.com"><span className="string">'iwilsonq@gmail.com'</span></a>, question))
        </p>
      </div>
    );
  }
}
