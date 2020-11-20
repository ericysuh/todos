import React from 'react';

import './FooterLinks.scss';

function FooterLinks() {
  return (
    <div className="footer-links">
      <a className="footer-links__homepage" href="//eric-suh.com">Created by Eric Suh</a> <br />
      <a className="footer-links__source-code" href="https://github.com/ericysuh/weather">Source Code</a>
    </div>
  );
}

export default FooterLinks;
