import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = () => {
  const [name, setName] = useState('Ruban Nanthagopal');
  const [designation, setDesignation] = useState('Founder');
  const [mobile, setMobile] = useState('+94 777 745862');
  const [email, setEmail] = useState('ruban@cabbageapps.com');

  const [profilePicture, setProfilePicture] = useState('Ruban Nanthagopal');
  const [enableDiscovery, setEnableDisconvery] = useState(true);
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
        type="checkbox"
        placeholder="Meeting"
        checked={enableDiscovery}
        onChange={e => setEnableDisconvery(e.target.checked)}
      />{' '}
      Enable Book a Meeting
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
        enableDiscovery={enableDiscovery}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));
