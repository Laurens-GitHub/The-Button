import express from "express";
import cors from "cors";
// Import required AWS SDK clients and commands for Node.js.
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./libs/s3Client.js"; // Helper function that creates an Amazon S3 service client module.
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fetch from "node-fetch";

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())

// app.get('/', (req, res) => {
//   res.send('Hi There!')
// });

const bucketParams = {
  Bucket: 'soundsforthebutton',
  Key: 'Samwise Potatoes.mp3',
};

const getSoundUrl = async () => {
  try {
      // Create the command.
      const command = new GetObjectCommand(bucketParams);

      // Create the presigned URL.
      const signedUrl = await getSignedUrl(s3Client, command);
      const response = await fetch(signedUrl);
      const url = await response;
      return await url['url']


  } catch (err) {
      console.log('Error creating presigned URL', err);
  };
};

app.get('/', async (req, res) => {
  res.send(String(await getSoundUrl()))
});

// const showUrl = () => {
//   const soundButton = document.getElementById('sound')
//   soundButton.addEventListener('click', async () => {
//     soundButton.innerHTML = `${await getSoundUrl()}`
//   })
// }

// app.get('/', async (req, res) => {
//   res.send(await showUrl())
// });

app.listen('3000', () => { })
