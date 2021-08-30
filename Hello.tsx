import React from 'react';

const icons = {
  mobile:
    'https://firebasestorage.googleapis.com/v0/b/cabbage-mail-signature.appspot.com/o/mobile-icon.png?alt=media&token=d0e494cf-ca03-40ca-a68f-08931404d2de',
  website:
    'https://firebasestorage.googleapis.com/v0/b/cabbage-mail-signature.appspot.com/o/website-icon.png?alt=media&token=f6c3518c-4f56-4004-b697-ff4ae3b1c717',
  email:
    'https://firebasestorage.googleapis.com/v0/b/cabbage-mail-signature.appspot.com/o/mail-icon.png?alt=media&token=fb9e1e93-5a0e-4c93-a791-ae8a882671be',
  linkedIn:
    'https://firebasestorage.googleapis.com/v0/b/cabbage-mail-signature.appspot.com/o/linked-in-icon.png?alt=media&token=40c1a521-ffaa-48fa-89f7-083414ecd858',
  bookCall:
    'https://firebasestorage.googleapis.com/v0/b/cabbage-mail-signature.appspot.com/o/discovery-call.png?alt=media&token=658c87aa-d894-4cdb-85a7-c5c4adbf6eb4',
  caLogo:
    'https://firebasestorage.googleapis.com/v0/b/cabbage-mail-signature.appspot.com/o/ca-logo.png?alt=media&token=51dcca59-2e21-45ad-9ac2-85b8c559f129'
};

export default ({
  name,
  email,
  mobile,
  profilePicture,
  designation,
  enableDiscovery
}) => (
  <table
    style={{
      direction: 'ltr',
      borderRadius: 0,
      mozBorderRadius: 0,
      khtmlBorderRadius: 0,
      oBorderRadius: 0,
      webkitBorderRadius: 0,
      msBorderRadius: 0,
      borderCollapse: 'collapse'
    }}
    className="main_html"
  >
    <tbody>
      <tr>
        {' '}
        <td>
          {' '}
          <table
            cellPadding={0}
            cellSpacing={0}
            className="ws-tpl"
            style={{ fontFamily: 'Arial', lineHeight: '1.15', color: '#000' }}
          >
            {' '}
            <tbody>
              <tr>
                {' '}
                <td
                  style={{ paddingRight: '14px', verticalAlign: 'top' }}
                  valign="top"
                >
                  {' '}
                  <table cellPadding={0} cellSpacing={0}>
                    {' '}
                    <tbody>
                      <tr>
                        {' '}
                        <td style={{ lineHeight: '1.2' }}>
                          {' '}
                          <span
                            className="ws-tpl-name"
                            style={{
                              fontFamily: 'Arial',
                              textTransform: 'initial',
                              fontWeight: 800
                            }}
                          >
                            {' '}
                            <span
                              style={{ color: '#000000', fontSize: '20px' }}
                              data-acs="name"
                            >
                              {' '}
                              {name}{' '}
                            </span>{' '}
                          </span>
                          <br />{' '}
                          <span
                            className="ws-tpl-title"
                            style={{
                              fontSize: '14px',
                              letterSpacing: '0px',
                              fontFamily: 'Arial',
                              textTransform: 'initial',
                              color: '#000000'
                            }}
                            data-acs="title"
                          >
                            {' '}
                            {designation} |
                          </span>{' '}
                          <span
                            className="ws-tpl-company"
                            style={{
                              fontSize: '14px',
                              letterSpacing: '0px',
                              fontFamily: 'Arial',
                              textTransform: 'initial',
                              fontWeight: 'bold',
                              color: '#000000'
                            }}
                            data-acs="company"
                          >
                            {' '}
                            Cabbage Apps{' '}
                          </span>{' '}
                        </td>{' '}
                      </tr>{' '}
                      <tr>
                        {' '}
                        <td
                          style={{
                            lineHeight: 0,
                            paddingTop: '14px',
                            paddingBottom: 0
                          }}
                        >
                          {' '}
                        </td>{' '}
                      </tr>{' '}
                      <tr>
                        {' '}
                        <td style={{ lineHeight: 0 }}>
                          {' '}
                          <table cellPadding={0} cellSpacing={0}>
                            {' '}
                            <tbody>
                              <tr>
                                {' '}
                                <td>
                                  {' '}
                                  <table cellPadding={0} cellSpacing={0}>
                                    {' '}
                                    <tbody>
                                      <tr>
                                        {' '}
                                        <td
                                          style={{
                                            lineHeight: '0%',
                                            paddingBottom: '5px'
                                          }}
                                        >
                                          {' '}
                                          <table
                                            className="ws-tpl-mobile"
                                            cellPadding={0}
                                            cellSpacing={0}
                                            style={{
                                              lineHeight: '14px',
                                              fontSize: '14px',
                                              fontFamily: 'Arial'
                                            }}
                                          >
                                            {' '}
                                            <tbody>
                                              <tr>
                                                {' '}
                                                <td
                                                  style={{
                                                    colorScheme: 'light only',
                                                    fontFamily: 'Arial',
                                                    fontWeight: 'bold',
                                                    fontSize: '14px',
                                                    color: '#45668E'
                                                  }}
                                                >
                                                  {' '}
                                                  <img
                                                    src={icons.mobile}
                                                    width={40}
                                                    height={30}
                                                    style={{
                                                      verticalAlign: '-2px',
                                                      lineHeight: '1.2',
                                                      width: 40,
                                                      height: 30
                                                    }}
                                                  />{' '}
                                                </td>{' '}
                                                <td
                                                  style={{
                                                    width: '5px',
                                                    fontSize: '1pt',
                                                    lineHeight: 0
                                                  }}
                                                  width={5}
                                                >
                                                  &nbsp;
                                                </td>{' '}
                                                <td
                                                  style={{
                                                    colorScheme: 'light only',
                                                    fontFamily: 'Arial',
                                                    fontSize: '14px'
                                                  }}
                                                >
                                                  {' '}
                                                  <a
                                                    href={`tel:+${mobile}`}
                                                    target="_blank"
                                                    style={{
                                                      colorScheme: 'light only',
                                                      textDecoration: 'none',
                                                      fontSize: '14px',
                                                      fontFamily: 'Arial'
                                                    }}
                                                  >
                                                    {' '}
                                                    <span
                                                      data-acs="mobile"
                                                      style={{
                                                        lineHeight: '1.2',
                                                        colorScheme:
                                                          'light only',
                                                        color: '#000000',
                                                        fontFamily: 'Arial',
                                                        whiteSpace: 'nowrap',
                                                        fontSize: '14px'
                                                      }}
                                                    >
                                                      {' '}
                                                      {mobile}{' '}
                                                    </span>{' '}
                                                  </a>{' '}
                                                </td>{' '}
                                              </tr>{' '}
                                            </tbody>
                                          </table>{' '}
                                        </td>{' '}
                                        <td
                                          style={{
                                            lineHeight: '0%',
                                            paddingBottom: '5px'
                                          }}
                                        >
                                          {' '}
                                          <table
                                            className="ws-tpl-website"
                                            cellPadding={0}
                                            cellSpacing={0}
                                            style={{
                                              lineHeight: '14px',
                                              fontSize: '14px',
                                              fontFamily: 'Arial'
                                            }}
                                          >
                                            {' '}
                                            <tbody>
                                              <tr>
                                                {' '}
                                                <td
                                                  style={{ padding: '0 6px' }}
                                                >
                                                  {' '}
                                                  <span
                                                    style={{
                                                      colorScheme: 'light only',
                                                      fontFamily: 'Arial',
                                                      fontWeight: 'bold',
                                                      fontSize: '14px',
                                                      color: '#000000'
                                                    }}
                                                  >
                                                    {' '}
                                                  </span>{' '}
                                                </td>{' '}
                                                <td
                                                  style={{
                                                    colorScheme: 'light only',
                                                    fontFamily: 'Arial',
                                                    fontWeight: 'bold',
                                                    fontSize: '14px',
                                                    color: '#45668E'
                                                  }}
                                                >
                                                  {' '}
                                                  <img
                                                    src={icons.website}
                                                    width={40}
                                                    height={30}
                                                    style={{
                                                      verticalAlign: '-2px',
                                                      lineHeight: '1.2',
                                                      width: 40,
                                                      height: 30
                                                    }}
                                                  />{' '}
                                                </td>{' '}
                                                <td
                                                  style={{
                                                    width: '5px',
                                                    fontSize: '1pt',
                                                    lineHeight: 0
                                                  }}
                                                  width={5}
                                                >
                                                  &nbsp;
                                                </td>{' '}
                                                <td
                                                  style={{
                                                    colorScheme: 'light only',
                                                    fontFamily: 'Arial',
                                                    fontSize: '14px'
                                                  }}
                                                >
                                                  {' '}
                                                  <a
                                                    href="https://cabbageapps.com/"
                                                    target="_blank"
                                                    style={{
                                                      colorScheme: 'light only',
                                                      textDecoration: 'none',
                                                      fontSize: '14px',
                                                      fontFamily: 'Arial'
                                                    }}
                                                  >
                                                    {' '}
                                                    <span
                                                      data-acs="website"
                                                      style={{
                                                        lineHeight: '1.2',
                                                        colorScheme:
                                                          'light only',
                                                        color: '#000000',
                                                        fontFamily: 'Arial',
                                                        whiteSpace: 'nowrap',
                                                        fontSize: '14px'
                                                      }}
                                                    >
                                                      {' '}
                                                      www.cabbageapps.com{' '}
                                                    </span>{' '}
                                                  </a>{' '}
                                                </td>{' '}
                                              </tr>{' '}
                                            </tbody>
                                          </table>{' '}
                                        </td>{' '}
                                      </tr>{' '}
                                    </tbody>
                                  </table>{' '}
                                </td>{' '}
                              </tr>{' '}
                              <tr>
                                {' '}
                                <td>
                                  {' '}
                                  <table cellPadding={0} cellSpacing={0}>
                                    {' '}
                                    <tbody>
                                      <tr>
                                        {' '}
                                        <td
                                          style={{
                                            lineHeight: '0%',
                                            paddingBottom: '5px'
                                          }}
                                        >
                                          {' '}
                                          <table
                                            className="ws-tpl-email"
                                            cellPadding={0}
                                            cellSpacing={0}
                                            style={{
                                              lineHeight: '14px',
                                              fontSize: '14px',
                                              fontFamily: 'Arial'
                                            }}
                                          >
                                            {' '}
                                            <tbody>
                                              <tr>
                                                {' '}
                                                <td
                                                  style={{
                                                    colorScheme: 'light only',
                                                    fontFamily: 'Arial',
                                                    fontWeight: 'bold',
                                                    fontSize: '14px',
                                                    color: '#45668E'
                                                  }}
                                                >
                                                  {' '}
                                                  <img
                                                    src={icons.email}
                                                    width={40}
                                                    height={30}
                                                    style={{
                                                      verticalAlign: '-2px',
                                                      lineHeight: '1.2',
                                                      width: 40,
                                                      height: 30
                                                    }}
                                                  />{' '}
                                                </td>{' '}
                                                <td
                                                  style={{
                                                    width: '5px',
                                                    fontSize: '1pt',
                                                    lineHeight: 0
                                                  }}
                                                  width={5}
                                                >
                                                  &nbsp;
                                                </td>{' '}
                                                <td
                                                  style={{
                                                    colorScheme: 'light only',
                                                    fontFamily: 'Arial',
                                                    fontSize: '14px'
                                                  }}
                                                >
                                                  {' '}
                                                  <a
                                                    href={`mailto:${email}`}
                                                    target="_blank"
                                                    style={{
                                                      colorScheme: 'light only',
                                                      textDecoration: 'none',
                                                      fontSize: '14px',
                                                      fontFamily: 'Arial'
                                                    }}
                                                  >
                                                    {' '}
                                                    <span
                                                      data-acs="email"
                                                      style={{
                                                        lineHeight: '1.2',
                                                        colorScheme:
                                                          'light only',
                                                        color: '#000000',
                                                        fontFamily: 'Arial',
                                                        whiteSpace: 'nowrap',
                                                        fontSize: '14px'
                                                      }}
                                                    >
                                                      {' '}
                                                      {email}{' '}
                                                    </span>{' '}
                                                  </a>{' '}
                                                </td>{' '}
                                              </tr>{' '}
                                            </tbody>
                                          </table>{' '}
                                        </td>{' '}
                                      </tr>{' '}
                                    </tbody>
                                  </table>{' '}
                                </td>{' '}
                              </tr>{' '}
                            </tbody>
                          </table>{' '}
                        </td>{' '}
                      </tr>{' '}
                      <tr>
                        {' '}
                        <td style={{ paddingTop: '12px' }}>
                          {' '}
                          <table
                            className="ws-tpl-social"
                            cellPadding={0}
                            cellSpacing={0}
                            style={{ width: '100%' }}
                          >
                            {' '}
                            <tbody>
                              <tr>
                                {' '}
                                <td>
                                  <table
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="left"
                                          style={{
                                            paddingRight: '6px',
                                            textAlign: 'center',
                                            paddingTop: 0
                                          }}
                                        >
                                          {' '}
                                          <a
                                            href="https://www.linkedin.com/in/ragularuban/"
                                            target="_blank"
                                            style={{
                                              fontSize: '14px',
                                              color: '#444',
                                              textDecoration: 'none'
                                            }}
                                          >
                                            {' '}
                                            <img
                                              width={40}
                                              height={30}
                                              src={icons.linkedIn}
                                              style={{
                                                float: 'left',
                                                border: 'none',
                                                width: 40,
                                                height: 30
                                              }}
                                              border={0}
                                            />{' '}
                                          </a>{' '}
                                        </td>
                                        <td>
                                          {enableDiscovery && (
                                            <table
                                              cellPadding={0}
                                              cellSpacing={0}
                                              border={0}
                                            >
                                              <tbody>
                                                <tr>
                                                  <td style={{ lineHeight: 0 }}>
                                                    <a
                                                      href="https://pasteboard.co/KhN4bsM.jpg"
                                                      target="blank"
                                                      style={{
                                                        textDecoration: 'none',
                                                        lineHeight: '41px',
                                                        display: 'block',
                                                        fontSize: 0
                                                      }}
                                                    >
                                                      <img
                                                        src={icons.bookCall}
                                                        align="right"
                                                        height={46}
                                                        width={185}
                                                        style={{
                                                          width: '185px',
                                                          verticalAlign:
                                                            'initial',
                                                          display: 'block',
                                                          height: '46px'
                                                        }}
                                                      />{' '}
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          )}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>{' '}
                              </tr>{' '}
                            </tbody>
                          </table>{' '}
                        </td>{' '}
                      </tr>{' '}
                    </tbody>
                  </table>{' '}
                </td>{' '}
                <td width={50} style={{ width: '50px' }}>
                  {' '}
                </td>
                <td style={{ verticalAlign: 'top', paddingRight: '0px' }}>
                  {' '}
                  <table
                    cellPadding={0}
                    cellSpacing={0}
                    className="ws-tpl-photo"
                    style={{ width: '65px' }}
                  >
                    {' '}
                    <tbody>
                      <tr>
                        {' '}
                        <td>
                          {' '}
                          <img
                            src={profilePicture}
                            align="right"
                            height={100}
                            width={100}
                            style={{
                              width: '100px',
                              verticalAlign: 'initial',
                              borderRadius: '50%',
                              mozBorderRadius: '50%',
                              khtmlBorderRadius: '50%',
                              oBorderRadius: '50%',
                              webkitBorderRadius: '50%',
                              msBorderRadius: '50%',
                              display: 'block',
                              height: '100px'
                            }}
                          />{' '}
                        </td>{' '}
                      </tr>{' '}
                      <tr>
                        {' '}
                        <td>
                          {' '}
                          <img
                            src={icons.caLogo}
                            align="right"
                            height={100}
                            width={100}
                            style={{
                              width: '100px',
                              verticalAlign: 'initial',

                              display: 'block',
                              height: '100px'
                            }}
                          />{' '}
                        </td>{' '}
                      </tr>{' '}
                    </tbody>
                  </table>{' '}
                </td>{' '}
              </tr>{' '}
            </tbody>
          </table>
          <table cellPadding={0} cellSpacing={0} border={0} width="100%">
            <tbody>
              <tr>
                <td style={{ lineHeight: 0, height: '14px' }} />
              </tr>
            </tbody>
          </table>
        </td>{' '}
      </tr>
    </tbody>
  </table>
);
