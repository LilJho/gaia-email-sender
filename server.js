// const express = require("express");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");

import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
const PORT = 3500;

app.use(bodyParser.json());

const personalEmail = process.env.EMAIL;
const personalPwd = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: personalEmail,
    pass: personalPwd,
  },
});

app.get("/", () => {
  console.log("Hello World");
});

app.use(cors());

app.post("/send-email", async (req, res) => {
  const {
    email,
    link,
    firstName,
    middleName,
    lastName,
    userAccountId,
    patientInfoId,
  } = req.body;

  if (!email || !link) {
    return res.status(400).send("Email or link is missing");
  }

  const url = new URL(link);
  const params = new URLSearchParams(url.search);
  params.set("email", email);
  params.set("userAccountId", userAccountId);
  params.set("patientInfoId", patientInfoId);
  url.search = params.toString();

  const mailOptions = {
    from: personalEmail,
    to: email,
    subject: "Greetings from The House of Gaia!",
    attachments: [
      {
        filename: "bee.png",
        path: "./images/bee.png",
        cid: "unique@beeimg.info",
      },
      {
        filename: "green_logo.png",
        path: "./images/green_logo.png",
        cid: "unique@greenlogo.info",
      },
      {
        filename: "instagram2x.png",
        path: "./images/instagram2x.png",
        cid: "unique@instagram.info",
      },
      {
        filename: "facebook2x.png",
        path: "./images/facebook2x.png",
        cid: "unique@facebook.info",
      },
      {
        filename: "mail2x.png",
        path: "./images/mail2x.png",
        cid: "unique@mail.info",
      },
      {
        filename: "newbg.png",
        path: "./images/newbg.png",
        cid: "unique@bg.info",
      },
    ],
    html: `<!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" type="text/css"/><!--<![endif]-->
    <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
    
        .image_block img+div {
          display: none;
        }
    
        @media (max-width:680px) {
    
          .desktop_hide table.icons-inner,
          .social_block.desktop_hide .social-table {
            display: inline-block !important;
          }
    
          .icons-inner {
            text-align: center;
          }
    
          .icons-inner td {
            margin: 0 auto;
          }
    
          .mobile_hide {
            display: none;
          }
    
          .row-content {
            width: 100% !important;
          }
    
          .stack .column {
            width: 100%;
            display: block;
          }
    
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
    
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    <body style="background-color: #fdfce9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fdfce9;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #808080; background-size: auto;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f1; background-image: url('cid:unique@bg.info'); background-repeat: no-repeat; background-size: auto; border-bottom: 0 solid #fff; border-left: 0 solid #fff; border-radius: 0; border-right: 0px solid #fff; border-top: 0 solid #fff; color: #000; width: 660px; margin: 0 auto;" width="660">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
    <div align="center" class="alignment" style="line-height:10px"><img alt="I'm an image" src="cid:unique@greenlogo.info" style="display: block; height: auto; border: 0; max-width: 132px; width: 100%;" title="I'm an image" width="132"/></div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: Tahoma, Verdana, sans-serif">
    <div class="" style="font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 24px; color: #154415; line-height: 2;">
    <p style="margin: 0; font-size: 28px; text-align: center; mso-line-height-alt: 56px; letter-spacing: 4px;"><span style="font-size:28px;"><strong>"Empower </strong></span></p>
    <p style="margin: 0; font-size: 28px; text-align: center; mso-line-height-alt: 56px; letter-spacing: 4px;"><span style="font-size:28px;"><strong>Your Health"</strong></span></p>
    <p style="margin: 0; font-size: 28px; text-align: center; mso-line-height-alt: 56px; letter-spacing: 4px;"><strong><span style="font-size:24px;"><span style="font-size:18px;">Sign Up Today</span></span></strong></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #123d12; line-height: 1.2;">
    <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 14.399999999999999px; letter-spacing: 2px;"><span style="font-size:12px;">Set your </span><span style="font-size:12px;">password, </span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="button_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad">
    <div align="center" class="alignment"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:42px;width:199px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#066c35"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="${url}" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#066c35;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:2px;"><span style="margin: 0; word-break: break-word; line-height: 32px;">please click here.</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-top:20px;text-align:center;padding-right:0px;padding-left:0px;">
    <div align="center" class="alignment">
    <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="126px">
    <tr>
    <td style="padding:0 5px 0 5px;"><a href="https://web.facebook.com/houseofgaiaph" target="_blank"><img alt="Facebook" height="32" src="cid:unique@facebook.info" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="https://www.instagram.com/houseofgaiaph" target="_blank"><img alt="Instagram" height="32" src="cid:unique@instagram.info" style="display: block; height: auto; border: 0;" title="Instagram" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="mailto:book@houseofgaia.ph" target="_blank"><img alt="E-Mail" height="32" src="cid:unique@mail.info" style="display: block; height: auto; border: 0;" title="E-Mail" width="32"/></a></td>
    </tr>
    </table>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="color:#504c4c;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
    <p style="margin: 0; word-break: break-word;">Copyright 2021 The House of Gaia</p>
    <p style="margin: 0; word-break: break-word;">Sto. Toribio, Lipa, Batangas</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 660px; margin: 0 auto;" width="660">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
    <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
    <!--[if !vml]><!-->
    <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
    <tr>
    <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link" style="text-decoration: none;" target="_blank"><img align="center" alt="Designed with BEE" class="icon" height="32" src="cid:unique@beeimg.info" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"/></a></td>
    <td style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table><!-- End -->
    </body>
    </html>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send(`Error sending email: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
