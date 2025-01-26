import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface YelpRecentLoginEmailProps {
    Data: any;
  }
  
  const baseUrl = process.env.MYAPP_URL
    ? `https://${process.env.MYAPP_URL}`
    : "";
  
export const MessageEmail = async(Data: any) => {

    function flattenJson(obj: any, parentKey = ''): { key: string; value: any }[] {
        const result: { key: string; value: any }[] = [];
    
        if (Array.isArray(obj)) {
            obj.forEach((item, index) => {
                const newKey = parentKey ? `${parentKey}[${index}]` : `[${index}]`;
                result.push(...flattenJson(item, newKey));
            });
        } else if (obj !== null && typeof obj === 'object') {
            Object.entries(obj).forEach(([key, value]) => {
                const newKey = parentKey ? `${parentKey}.${key}` : key;
                result.push(...flattenJson(value, newKey));
            });
        } else {
            // For primitive values, add to the result
            result.push({ key: parentKey, value: obj });
        }
    
        return result;
    }

    const ShowableData = await flattenJson(Data);
    
  
    return (
      <Html>
        <Head />
        <Preview>New Form has been submitted. Please open to see the details.</Preview>
        <Body style={main}>
          <Container>
            <Section style={logo}>
              <Img src={`${baseUrl}/assets/mailbox.png`} />
            </Section>
  
            <Section style={content}>
  
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Hey There!
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 16,
                      fontWeight: "normal",
                    }}
                  >
                    We got a new form submission from your website. Details are below.
                  </Heading>
  
                    {
                        ShowableData.map((data: any,i: number)=>
                        (
                        <Text key={i} style={paragraph}>
                            <b style={{ textTransform: "capitalize" }}>{data.key}: </b>
                            {data.value}
                        </Text>
                        )
                        )
                    }
                  
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: "20px 0",
    height: "50px",
    width: "50px"
  };
  
  const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  
  const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };
  