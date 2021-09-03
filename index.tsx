import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = () => {
  const [name, setName] = useState('Ruban Nanthagopal');
  const [designation, setDesignation] = useState('Founder');
  const [mobile, setMobile] = useState('+94 777 745862');
  const [email, setEmail] = useState('ruban@cabbageapps.com');

  const [profilePicture, setProfilePicture] = useState(
    'https://d36urhup7zbd7q.cloudfront.net/fc4402cf-1a69-458b-b99a-69774385f9b9/EmployeeProfilepictures.crop_788x788_58,0.preview.format_png.resize_200x.png#logo'
  );
  const [discoveryCallLink, setDiscoveryCallLink] = useState('');
  const [linkedInLink, setLInkedInLInk] = useState(
    'https://lk.linkedin.com/company/cabbageapps'
  );
  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        placeholder="Designation"
        value={designation}
        onChange={e => setDesignation(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br /> <br />
      <input
        placeholder="Avatar"
        value={profilePicture}
        onChange={e => setProfilePicture(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        placeholder="Discover Call Link | Leave it blank"
        value={discoveryCallLink}
        onChange={e => setDiscoveryCallLink(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        placeholder="LinkedIn Link"
        value={linkedInLink}
        onChange={e => setLInkedInLInk(e.target.value)}
      />{' '}
      <br /> <br />
      <hr />
      <br />
      <br />
      <br />
      <Hello
        name={name}
        email={email}
        mobile={mobile}
        designation={designation}
        profilePicture={profilePicture}
        discoveryCallLink={discoveryCallLink}
        linkedInLink={linkedInLink}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));
