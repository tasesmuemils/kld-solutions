import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const KLDEmailTemplate = ({ name, email, text }) => (
  <Html>
    <Head />
    <Preview>New client request</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://yt3.googleusercontent.com/d3vAM5Bfn0IBm5r6gxpuLxdWqfUSFp8maKoav_xF58_WVl20ZQxzRJP1CJJ3Bqp1NhE940NQOg=s176-c-k-c0x00ffffff-no-rj`}
          width={100}
          height={100}
          alt='KLD'
          style={logo}
        />
        <Text style={paragraph}>KLD Solutions,</Text>
        <Text style={paragraph}>
          {name} has submitted the contact form on your website. Their email is{' '}
          {email}!
        </Text>
        <Text style={paragraph}>{text}</Text>
        <Text style={paragraph}>
          Best,
          <br />
          KLD Solutions
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

// export default KLDEmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};
