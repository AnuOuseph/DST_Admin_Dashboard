const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require(`jsonwebtoken`);

const createAdmin = async (req, res) => {
  const { adminID, fullname, password, privilages } = req.body;

  try {
    const existingAdmin = await Admin.find({ adminID });
    if (existingAdmin.length > 0) {
      res.status(400).json({ message: "Admin Already Exists" });
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

    if (admin) {
      const savedAdmin = await admin.save();
      res.status(201).json({
        _id: savedAdmin.adminID,
        fullname: savedAdmin.fullname,
        privilages: savedAdmin.privilages,
      });
    } else {
      res.status(400).json({ message: "Error Occured" });
    }
  } catch (error) {
    res.status(500).json({ message: "error occured", error: error.message });
  }
};

// const adminLogin = async (req, res) => {
//     const { fullname, password } = req.body;

//     try {
//         const admin = await Admin.findOne({ fullname });

//         if (!admin) {
//             res.status(401).json({ message: 'Invalid Admin ID or Password' });
//             return;
//         }

//         const isPasswordValid = bcrypt.compareSync(password, admin.password);

//         if (isPasswordValid) {
//             const token = jwt.sign({ fullname: admin.fullname }, 'your-secret-key', {
//                 expiresIn: '4w', // Token expiration time
//             });

//             res.json({ token });
//             console.log(token);
//             console.log("Success");
//         } else {
//             res.status(401).json({ message: 'Invalid Admin ID or Password' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Error Occurred', error: error.message });
//     }
// };

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await Admin.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
};
// Adjust the query to find super admin based on specific criteria (e.g., a specific role)
// const superAdmin = await Admin.findOne({ fullname, role: 'superadmin' });

//         if (!superAdmin) {
//             res.status(401).json({ message: 'Invalid Super Admin ID or Password' });
//             return;
//         }

//         const isPasswordValid = bcrypt.compareSync(password, superAdmin.password);

//         if (isPasswordValid) {
//             const token = jwt.sign({ fullname: superAdmin.fullname, role: superAdmin.role }, 'your-superadmin-secret-key', {
//                 expiresIn: '4w', // Token expiration time
//             });

//             res.json({ token });
//             console.log(token);
//             console.log("Super Admin Login Success");
//         } else {
//             res.status(401).json({ message: 'Invalid Super Admin ID or Password' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Error Occurred', error: error.message });
//     }
// };

module.exports = { createAdmin, adminLogin };
