import * as React from 'react';

import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
} from '@react-email/components';

interface EmailTemplateProps {
    space: string,
    date: string,
    startTime: string,
    endTime: string,
    name: string,
    email: string,
    organisation: string,
}

const baseUrl = "https://campus-eight.vercel.app"

export const EmailTemplateUser: React.FC<Readonly<EmailTemplateProps>> = ({
    space,
    date,
    startTime,
    endTime,
    name,
    email,
    organisation,
}) => (
    <Html>
        <Head />
        <Preview>Bedankt voor je aanvraag!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={`${baseUrl}/logo.png`}
                    width="40%"
                    style={{ margin: '0 auto' }}
                    alt="Logo for Campus"
                />

                <Heading style={{ ...h1, textAlign: 'center' }}>We hebben uw aanvraag voor de ruimte &quot;{space}&quot; ontvangen.</Heading>
                <Text style={{ ...h2, textAlign: 'center' }}>Als deze ruimte beschikbaar is op {date} om {startTime}, zullen we een bevestiging sturen voor uw aanvraag.</Text>
                <a href="https://campus-eight.vercel.app" style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer'>
                    <Text style={{ ...button, textAlign: 'center' }}>Maak nog een boeking</Text>
                </a>
                <Img
                    src={`${baseUrl}/favicon.png`}
                    width="32"
                    height="32"
                    alt="Campus Logo"
                    style={{ margin: '0 auto' }}
                />
                <Text style={{ ...footer, textAlign: 'center' }}>
                    <Link
                        href="https://campus-eight.vercel.app/"
                        target="_blank"
                        style={{ ...link, color: '#370731' }}
                    >
                        campus.pzh.nl
                    </Link>
                    <br />
                    Blijf cocreëren op de digitale campus
                </Text>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: '#ffffff',
};

const container = {
    paddingLeft: '12px',
    paddingRight: '12px',
    margin: '0 auto',
};

const h1 = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0',
};

const button = {
    color: '#FFFFFF',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '40px auto 40px auto',
    padding: '20px 20px',
    borderRadius: '5px',
    backgroundColor: "#2E3092",
    width: 'fit-content',
    textDecoration: "none"
};

const h2 = {
    color: '#898989',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '30px 0',
    padding: '0',
};

const link = {
    color: '#00D4CA',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    textDecoration: 'underline',
};

const text = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    margin: '24px 0',
};

const footer = {
    color: '#898989',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '12px',
    lineHeight: '22px',
    marginTop: '12px',
    marginBottom: '24px',
};

const code = {
    display: 'inline-block',
    padding: '16px 4.5%',
    width: '90.5%',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    border: '1px solid #eee',
    color: '#333',
};