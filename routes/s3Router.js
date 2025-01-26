
const express= require("express")
const dotenv = require('dotenv');
dotenv.config();

const BUCKET_NAME=process.env.BUCKET_NAME 
const AWS_ACCESSKEYID=process.env.AWS_ACCESSKEYID
const AWS_SECRETACCESSKEY=process.env.AWS_SECRETACCESSKEY
const AWS_REGION=process.env.AWS_REGION

const router= express.Router()

const {
    S3Client,
    ListObjectsV2Command,
    GetObjectCommand,
    DeleteObjectCommand
} = require('@aws-sdk/client-s3'); // Import AWS SDK v3 S3 client
const multer = require('multer'); // Import Multer for file uploads
const multerS3 = require('multer-s3'); // Import Multer S3 storage engine



// Create an S3 client instance
const s3Client = new S3Client({
    region: AWS_REGION,
    credentials: {
        accessKeyId: AWS_ACCESSKEYID,
        secretAccessKey: AWS_SECRETACCESSKEY,
    },
}); 


const upload = multer({
    storage: multerS3({
        s3: s3Client,
        bucket: BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname }); 
        },
        key: (req, file, cb) => {
            cb(null, file.originalname); 
        },
    }),
});



router.get('/', (req, res) => {
    
    res.send(`Successfully uploaded to `);
});


router.post('/', upload.single('file'), (req, res) => {
    res.json({ url:req?.file?.location,success:true});
});

module.exports=router

