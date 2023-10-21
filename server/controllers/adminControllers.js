const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');

const createAdmin = async (req, res) => {
   
        const { adminID, fullname, password, privilages } = req.body;

        try {
            const existingAdmin = await Admin.find({adminID});
            if(existingAdmin.length > 0) {
                res.status(400).json({ message: 'Admin Already Exists'});
                return;
            }
        
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        const admin = new Admin({
            adminID,
            fullname,
            password: hashedPassword,
            privilages,
        });

        if(admin) {
            const savedAdmin = await admin.save();
            res.status(201).json({
                _id: savedAdmin.adminID,
                fullname: savedAdmin.fullname,
                privilages: savedAdmin.privilages,
            });
        } else {
            res.status(400).json({ message: 'Error Occured'});
        }
    } catch (error) {
        res.status(500).json({ message: 'error occured', error: error.message});
    } 
};

module.exports = { createAdmin };