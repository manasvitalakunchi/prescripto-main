import mongoose from 'mongoose';
import doctorModel from './models/doctorModel.js';
import 'dotenv/config';

const checkDoctors = async () => {
    try {
        console.log('Connecting to:', process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        
        const doctors = await doctorModel.find({});
        console.log(`Found ${doctors.length} doctors in database:`);
        
        doctors.forEach((doc, index) => {
            console.log(`${index + 1}. ${doc.name} - ${doc.email}`);
        });
        
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

checkDoctors();