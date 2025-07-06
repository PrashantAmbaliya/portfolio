import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {senderEmail}</Preview>
      <Tailwind>
        <Body className="bg-gradient-to-br from-slate-50 to-gray-100 font-sans">
          <Container className="mx-auto py-8">
            {/* Header Section */}
            <Section className="mb-8 text-center">
              <div className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 shadow-lg">
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                  <Text className="text-purple-600 font-bold text-lg m-0">💬</Text>
                </div>
              </div>
              <Heading className="text-2xl font-bold text-gray-800 mt-4 mb-2">
                New Contact Form Message
              </Heading>
              <Text className="text-gray-600 text-sm m-0">
                Someone reached out through your portfolio website
              </Text>
            </Section>

            {/* Main Content Card */}
            <Section className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Purple accent bar */}
              <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600"></div>
              
              <div className="p-8">
                {/* Sender Info */}
                <Section className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                      <Text className="text-white font-semibold text-sm m-0">
                        {senderEmail.charAt(0).toUpperCase()}
                      </Text>
                    </div>
                    <div>
                      <Text className="font-semibold text-gray-800 m-0 text-sm">
                        New Message From
                      </Text>
                      <Link 
                        href={`mailto:${senderEmail}`}
                        className="text-purple-600 hover:text-purple-700 font-medium text-base no-underline"
                      >
                        {senderEmail}
                      </Link>
                    </div>
                  </div>
                </Section>

                <Hr className="border-gray-200 my-6" />

                {/* Message Content */}
                <Section>
                  <Text className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Message Content
                  </Text>
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-500">
                    <Text className="text-gray-800 leading-relaxed text-base whitespace-pre-wrap m-0">
                      {message}
                    </Text>
                  </div>
                </Section>

                <Hr className="border-gray-200 my-6" />

                {/* Action Buttons */}
                <Section className="text-center">
                  <Link
                    href={`mailto:${senderEmail}?subject=Re: Your message from portfolio&body=Hi,\n\nThank you for reaching out! `}
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg no-underline shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Reply to {senderEmail.split('@')[0]}
                  </Link>
                </Section>
              </div>
            </Section>

            {/* Footer */}
            <Section className="mt-8 text-center">
              <Text className="text-gray-500 text-xs leading-relaxed">
                This message was sent from your portfolio contact form.<br />
                Received on {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </Text>
            </Section>

            {/* Branding */}
            <Section className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 text-gray-400 text-xs">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                <Text className="m-0">Portfolio Contact System</Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
