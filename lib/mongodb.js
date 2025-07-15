const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'ALWAYS_ONLINE', value: 'false' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_READ_CMD', value: 'false' },
    { key: 'OWNER_REACT', value: 'false' },
    { key: 'AUTO_REACT', value: 'true' }, 
    { key: 'AUTO_BIO', value: 'true' }, 
    { key: 'AUTO_VOICE', value: 'true' },  
    { key: 'AUTO_TYPING', value: 'true' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 𝘔𝘖𝘕𝘎𝘖𝘋𝘉 𝘊𝘖𝘕𝘕𝘌𝘊𝘛𝘌𝘋 ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
                                                      
