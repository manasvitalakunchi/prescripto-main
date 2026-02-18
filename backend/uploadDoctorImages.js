import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const uploadDoctorImages = async () => {
    try {
        const frontendAssetsPath = '../Frontend/src/assets';
        const cloudinaryUrls = [];

        for (let i = 1; i <= 15; i++) {
            const imagePath = path.join(frontendAssetsPath, `doc${i}.png`);
            
            if (fs.existsSync(imagePath)) {
                console.log(`Uploading doc${i}.png...`);
                
                const result = await cloudinary.uploader.upload(imagePath, {
                    folder: 'doctors',
                    public_id: `doc${i}`,
                    overwrite: true
                });
                
                cloudinaryUrls.push(result.secure_url);
                console.log(`✓ Uploaded doc${i}.png: ${result.secure_url}`);
            } else {
                console.log(`✗ File not found: ${imagePath}`);
            }
        }

        console.log('\n--- Cloudinary URLs ---');
        cloudinaryUrls.forEach((url, index) => {
            console.log(`doc${index + 1}: '${url}'`);
        });

    } catch (error) {
        console.error('Error uploading images:', error);
    }
};

uploadDoctorImages();