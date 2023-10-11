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
    amount: string,
    date: string,
    startTime: string,
    endTime: string,
    name: string,
    email: string,
    organisation: string,
    lunch: boolean,
    coffee: boolean,
    cheers: boolean,
    screens: boolean,
    chairs: boolean,
}

const baseUrl = "https://campus-eight.vercel.app"

export const EmailTemplateUser: React.FC<Readonly<EmailTemplateProps>> = ({
    space,
    amount,
    date,
    startTime,
    endTime,
    name,
    email,
    organisation,
    lunch,
    coffee,
    cheers,
    screens,
    chairs,
}) => (
    <Html>
        <Head />
        <Preview>Bedankt voor je aanvraag!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={`${baseUrl}/logo.png`}
                    width="40%"
                    alt="Logo for Campus"
                />

                <Heading style={{ ...h1, textAlign: 'left' }}>We hebben uw aanvraag voor de ruimte <span style={{ color: "#2E3092" }}>{space}</span> ontvangen.</Heading>
                <Text style={{ ...h2, textAlign: 'left' }}>Als deze ruimte beschikbaar is op <span style={{ color: "#2E3092" }}>{date}</span> van <span style={{ color: "#2E3092" }}>{startTime}</span> tot <span style={{ color: "#2E3092" }}>{endTime}</span>, zullen we een bevestiging sturen voor uw aanvraag.</Text>
                <Text style={{ ...h2, textAlign: 'left', color: "#2E3092" }}>Details van uw boeking</Text>
                <Text style={{ ...text, textAlign: 'left' }}>Ruimte: {space}</Text>
                <Text style={{ ...text, textAlign: 'left' }}>Aantal personen: {amount}</Text>
                <Text style={{ ...text, textAlign: 'left' }}>Naam: {name}</Text>
                <Text style={{ ...text, textAlign: 'left' }}>E-mail: {email}</Text>
                <Text style={{ ...text, textAlign: 'left' }}>Organisatie: {organisation}</Text>
                <Text style={{ ...text, textAlign: 'left' }}>Lunch: {lunch ? "Ja" : "Nee"}</Text>
                <Text style={{ ...text, textAlign: 'left' }}>Koffie & gebak: {coffee ? "Ja" : "Nee"}</Text>
                <Text style={{ ...text, textAlign: 'left' }}>Borrel: {cheers ? "Ja" : "Nee"}</Text>
                <Text style={{ ...text, textAlign: 'left' }}>Schermen: {screens ? "Ja" : "Nee"}</Text>
                <Text style={{ ...text, textAlign: 'left' }}>Stoelen: {chairs ? "Ja" : "Nee"}</Text>
                <a href="https://campus-eight.vercel.app" style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer'>
                    <Text style={{ ...button, textAlign: 'center' }}>Maak nog een boeking</Text>
                </a>
                <Img
                    src={`${baseUrl}/favicon.png`}
                    width="32"
                    height="32"
                    alt="Campus Logo"
                />
                <Text style={{ ...footer, textAlign: 'left' }}>
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