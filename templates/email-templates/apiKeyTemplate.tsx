import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface SlackConfirmEmailProps {
    apikey?: string;
  }
  
  const baseUrl = process.env.MYAPP_URL
    ? `${process.env.MYAPP_URL}`
    : "";
  
  export const apiKeyTemplate = (apikey: string) => (
    <Html>
      <Head />
      <Preview>WeForms' Form Submission Access Key</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`${baseUrl}/assets/mailbox.png`}
              width="120"
              height="36"
              alt="WeForms"
            />
            WeForms
          </Section>
          <Heading style={h1}>Your Access Key for WeForms</Heading>
          <Text style={heroText}>
            Thanks for using WeForms. Here is for Access Key -
          </Text>
  
          <Section style={codeBox}>
            <Text style={confirmationCodeText}>{apikey}</Text>
          </Section>
  
          <Text style={text}>
            If you didn't request this email, there's nothing to worry about, you
            can safely ignore it.
          </Text>
  
          <Section>
            <Row style={footerLogos}>
              <Column style={{ width: "66%" }}>
                <Img
                  src={`${baseUrl}/assets/mailbox.png`}
                  width="120"
                  height="36"
                  alt="WeForms"
                />
                WeForms
              </Column>
              <Column>
                <Section>
                  <Row>
                    <Column>
                      <Link href="https://x.com/codewithgurjot" target="_blank">
                        <Img
                          src={`${baseUrl}/assets/x.webp`}
                          width="32"
                          height="32"
                          alt="X"
                          style={socialMediaIcon}
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="www.linkedin.com/in/gurjot-singh-js" target="_blank">
                        <Img
                          src={`${baseUrl}/assets/linkedin.png`}
                          width="32"
                          height="32"
                          alt="Linkedin"
                          style={socialMediaIcon}
                        />
                      </Link>
                    </Column>
                  </Row>
                </Section>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default apiKeyTemplate;
  
  const footerText = {
    fontSize: "12px",
    color: "#b7b7b7",
    lineHeight: "15px",
    textAlign: "left" as const,
    marginBottom: "50px",
  };
  
  const footerLink = {
    color: "#b7b7b7",
    textDecoration: "underline",
  };
  
  const footerLogos = {
    marginBottom: "32px",
    paddingLeft: "8px",
    paddingRight: "8px",
    width: "100%",
  };
  
  const socialMediaIcon = {
    display: "inline",
    marginLeft: "32px",
  };
  
  const main = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };
  
  const container = {
    margin: "0 auto",
    padding: "0px 20px",
  };
  
  const logoContainer = {
    marginTop: "32px",
  };
  
  const h1 = {
    color: "#1d1c1d",
    fontSize: "36px",
    fontWeight: "700",
    margin: "30px 0",
    padding: "0",
    lineHeight: "42px",
  };
  
  const heroText = {
    fontSize: "20px",
    lineHeight: "28px",
    marginBottom: "30px",
  };
  
  const codeBox = {
    background: "rgb(245, 244, 245)",
    borderRadius: "4px",
    marginBottom: "30px",
    padding: "40px 10px",
  };
  
  const confirmationCodeText = {
    fontSize: "20px",
    textAlign: "center" as const,
    verticalAlign: "middle",
  };
  
  const text = {
    color: "#000",
    fontSize: "14px",
    lineHeight: "24px",
  };
  