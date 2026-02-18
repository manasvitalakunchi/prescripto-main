import mongoose from 'mongoose';
import doctorModel from './models/doctorModel.js';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const doctors = [
    {
        name: 'Dr. Richard James',
        email: 'richard@prescripto.com',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767487/doctors/doc1.png'
    },
    {
        name: 'Dr. Emily Larson',
        email: 'emily@prescripto.com',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767489/doctors/doc2.png'
    },
    {
        name: 'Dr. Sarah Patel',
        email: 'sarah@prescripto.com',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767490/doctors/doc3.png'
    },
    {
        name: 'Dr. Christopher Lee',
        email: 'christopher@prescripto.com',
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767492/doctors/doc4.png'
    },
    {
        name: 'Dr. Jennifer Garcia',
        email: 'jennifer@prescripto.com',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767493/doctors/doc5.png'
    },
    {
        name: 'Dr. Andrew Williams',
        email: 'andrew@prescripto.com',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767495/doctors/doc6.png'
    },
    {
        name: 'Dr. Christopher Davis',
        email: 'christopherdavis@prescripto.com',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767497/doctors/doc7.png'
    },
    {
        name: 'Dr. Timothy White',
        email: 'timothy@prescripto.com',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767499/doctors/doc8.png'
    },
    {
        name: 'Dr. Ava Mitchell',
        email: 'ava@prescripto.com',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767500/doctors/doc9.png'
    },
    {
        name: 'Dr. Jeffrey King',
        email: 'jeffrey@prescripto.com',
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767502/doctors/doc10.png'
    },
    {
        name: 'Dr. Zoe Kelly',
        email: 'zoe@prescripto.com',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767504/doctors/doc11.png'
    },
    {
        name: 'Dr. Patrick Harris',
        email: 'patrick@prescripto.com',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767505/doctors/doc12.png'
    },
    {
        name: 'Dr. Chloe Evans',
        email: 'chloe@prescripto.com',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767507/doctors/doc13.png'
    },
    {
        name: 'Dr. Ryan Martinez',
        email: 'ryan@prescripto.com',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767509/doctors/doc14.png'
    },
    {
        name: 'Dr. Amelia Hill',
        email: 'amelia@prescripto.com',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        image: 'https://res.cloudinary.com/dcfbahwen/image/upload/v1757767510/doctors/doc15.png'
    }
];

const seedDoctors = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
        console.log('Connected to database:', mongoose.connection.name);
        
        await doctorModel.deleteMany({});
        
        for (const doctor of doctors) {
            const salt = await bcrypt.genSalt(10);
            doctor.password = await bcrypt.hash('doctor123', salt);
            doctor.date = Date.now();
            doctor.available = true;
            doctor.slots_booked = {};
            
            const newDoctor = new doctorModel(doctor);
            await newDoctor.save();
            console.log(`Added: ${doctor.name}`);
        }
        
        console.log(`\nAll ${doctors.length} doctors added successfully!`);
        console.log('Login credentials for all doctors:');
        console.log('Password: doctor123');
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

seedDoctors();