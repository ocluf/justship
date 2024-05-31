/* eslint-disable no-irregular-whitespace */
import { SMTPClient } from "emailjs";
import { RESEND_API_KEY } from "$env/static/private";
import { Resend } from "resend";
import { dev } from "$app/environment";
import { env as publicEnv } from "$env/dynamic/public";
import { env } from "$env/dynamic/private";
import { inline } from "@css-inline/css-inline";
import layout from "./layout.html?raw";
import login from "./login-email.html?raw";

const client = new SMTPClient({
  host: "localhost",
  port: 1025,
  ssl: false,
});

type LayoutEmailVariables = {
  product_url: string;
  product_name: string;
};

type LoginEmailVariables = LayoutEmailVariables & {
  action_url: string;
};

export const loginEmailHtmlTemplate = (variables: LoginEmailVariables) => {
  return inline(
    layout
      .replaceAll("{{{ @content }}}", login)
      .replaceAll("{{ product_url }}", variables.product_url)
      .replaceAll("{{ product_name }}", variables.product_name)
      .replaceAll("{{ action_url }}", variables.action_url)
  );
};

const sendTestEmail = async (options: {
  from: string;
  to: string;
  subject: string;
  html: string;
}) => {
  try {
    await client.sendAsync({
      text: options.subject,
      from: options.from,
      to: options.to,
      subject: options.subject,
      attachment: [{ data: options.html, alternative: true }],
    });
    console.log(`Test email sent to ${options.to}`);
  } catch (e) {
    console.error(e);
  }
};

const sendResendEmail = async (options: {
  from: string;
  to: string;
  subject: string;
  html: string;
  headers?: Record<string, string>;
}) => {
  const resend = new Resend(RESEND_API_KEY);
  try {
    await resend.emails.send(options);
  } catch (err) {
    console.error(err);
  }
};

export const sendEmail = async (options: {
  from: string;
  to: string;
  subject: string;
  html: string;
  headers?: Record<string, string>;
}) => {
  if (dev) {
    return await sendTestEmail(options);
  }
  return await sendResendEmail(options);
};
