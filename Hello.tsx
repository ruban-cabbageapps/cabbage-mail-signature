import React from 'react';

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
                  style={{ paddingRight: '16px', verticalAlign: 'top' }}
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
                              fontSize: '16px',
                              letterSpacing: '0px',
                              fontFamily: 'Arial',
                              textTransform: 'initial',
                              color: '#000000'
                            }}
                            data-acs="title"
                          >
                            {' '}
                            {designation},{' '}
                          </span>{' '}
                          <span
                            className="ws-tpl-company"
                            style={{
                              fontSize: '16px',
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
                            paddingTop: '16px',
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
                                              lineHeight: '16px',
                                              fontSize: '16px',
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
                                                    fontSize: '16px',
                                                    color: '#45668E'
                                                  }}
                                                >
                                                  {' '}
                                                  <img
                                                    src="https://lh3.google.com/u/0/d/1qlbywT9QmPyCHet5iteKUCQF4vqlFFJF=w2240-h1828-iv1"
                                                    width={40}
                                                    height={29}
                                                    style={{
                                                      verticalAlign: '-2px',
                                                      lineHeight: '1.2',
                                                      width: 40,
                                                      height: 29
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
                                                    fontSize: '16px'
                                                  }}
                                                >
                                                  {' '}
                                                  <a
                                                    href={`tel:+${mobile}`}
                                                    target="_blank"
                                                    style={{
                                                      colorScheme: 'light only',
                                                      textDecoration: 'none',
                                                      fontSize: '16px',
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
                                                        fontSize: '16px'
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
                                              lineHeight: '16px',
                                              fontSize: '16px',
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
                                                      fontSize: '16px',
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
                                                    fontSize: '16px',
                                                    color: '#45668E'
                                                  }}
                                                >
                                                  {' '}
                                                  <img
                                                    src="https://lh3.google.com/u/0/d/1F6HC0pLkCr4KWYUCYEPOJflAP7XoO4kp=w2240-h1828-iv1"
                                                    width={40}
                                                    height={29}
                                                    style={{
                                                      verticalAlign: '-2px',
                                                      lineHeight: '1.2',
                                                      width: 40,
                                                      height: 29
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
                                                    fontSize: '16px'
                                                  }}
                                                >
                                                  {' '}
                                                  <a
                                                    href="https://cabbageapps.com/"
                                                    target="_blank"
                                                    style={{
                                                      colorScheme: 'light only',
                                                      textDecoration: 'none',
                                                      fontSize: '16px',
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
                                                        fontSize: '16px'
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
                                              lineHeight: '16px',
                                              fontSize: '16px',
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
                                                    fontSize: '16px',
                                                    color: '#45668E'
                                                  }}
                                                >
                                                  {' '}
                                                  <img
                                                    src="https://lh3.google.com/u/0/d/1xztcxHzYLuKmtSmC8Za_OezwBEN21tgF=w2240-h1828-iv1"
                                                    width={40}
                                                    height={29}
                                                    style={{
                                                      verticalAlign: '-2px',
                                                      lineHeight: '1.2',
                                                      width: 40,
                                                      height: 29
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
                                                    fontSize: '16px'
                                                  }}
                                                >
                                                  {' '}
                                                  <a
                                                    href={`mailto:${email}`}
                                                    target="_blank"
                                                    style={{
                                                      colorScheme: 'light only',
                                                      textDecoration: 'none',
                                                      fontSize: '16px',
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
                                                        fontSize: '16px'
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
                                              fontSize: '16px',
                                              color: '#444',
                                              textDecoration: 'none'
                                            }}
                                          >
                                            {' '}
                                            <img
                                              width={40}
                                              height={29}
                                              src="https://lh3.google.com/u/0/d/1_8vwN-vizVUY_dQs0f_mD_RxU5GjdnBa=w2240-h1828-iv1"
                                              style={{
                                                float: 'left',
                                                border: 'none',
                                                width: 40,
                                                height: 29
                                              }}
                                              border={0}
                                            />{' '}
                                          </a>{' '}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>{' '}
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
                                                src="https://lh3.google.com/u/0/d/1qrLNZCNA5bkCO9LuXmvEb2OmBIzHk8b5=w2240-h1828-iv1"
                                                align="right"
                                                height={131}
                                                width={185}
                                                style={{
                                                  width: '185px',
                                                  verticalAlign: 'initial',
                                                  display: 'block',
                                                  height: '131px'
                                                }}
                                              />{' '}
                                            </a>
                                            <table
                                              cellPadding={0}
                                              cellSpacing={0}
                                              border={0}
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    style={{
                                                      lineHeight: 0,
                                                      height: '16px',
                                                      maxWidth: '600px'
                                                    }}
                                                  />
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  )}
                                </td>
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
                            src="https://d36urhup7zbd7q.cloudfront.net/fc4402cf-1a69-458b-b99a-69774385f9b9/EmployeeProfilepictures.crop_788x788_58,0.preview.format_png.resize_200x.png#logo"
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
                            src="https://lh3.google.com/u/0/d/1tSAkl1V4M_mbUjANQD5QKv4QC2hq9_d7=w2240-h1828-iv1"
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
                <td style={{ lineHeight: 0, height: '16px' }} />
              </tr>
            </tbody>
          </table>
        </td>{' '}
      </tr>
    </tbody>
  </table>
);
