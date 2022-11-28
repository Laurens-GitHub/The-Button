// Import required AWS SDK clients and commands for Node.js.
import { GetObjectCommand } from "@aws-sdk/client-s3";
// import { ReadStream } from "fs";
import { s3Client } from "./libs/s3Client.js"; // Helper function that creates an Amazon S3 service client module.
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fetch from "node-fetch";

export const bucketParams = {
  Bucket: "soundsforthebutton",
  Key: "Samwise Potatoes.mp3",
};

export const getSoundUrl = async () => {
    try {
        // Create the command.
        const command = new GetObjectCommand(bucketParams);

        // Create the presigned URL.
        const signedUrl = await getSignedUrl(s3Client, command);
        const response = await fetch(signedUrl);
        await response.text();

    } catch (err) {
        console.log("Error creating presigned URL", err);
    }
}

getSoundUrl();

// export const getSound = async () => {
//     try {
//       // Get the object} from the Amazon S3 bucket. It is returned as a ReadableStream.
//       const data = await s3Client.send(new GetObjectCommand(bucketParams));
//       // Convert the ReadableStream to a string.
//       return await data.Body.transformToString();
//     } catch (err) {
//       console.log("Error", err);
//     }
//   };

// getSound();

// const play = () => {
//     let fs = require('fs');
//     const music = fs.readfile(run());

//     return ReadStream.pipeline(music)
// }

// play();