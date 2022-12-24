const User = require('../Models/userModel');


exports.getAllUser = async (req,res, next) => {
    try {
        const user = await User.find();

        res.status(200).json({
            success: true,
            data: user,
            message: "Get All User Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}


exports.addNewUser = async (req, res, next) => {
    try {
        const { userName, email, password, age, address } = req.body;

        const newStudent = {
            userName,
            email,
            password,
            age,
            address
        }

        const student = await User.create(newStudent);

        res.status(200).json({
            success: true,
            data: student,
            message: "User add successfully "
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.updateUser = async (req, res, next) => {
    try{
        const {id} =req.params;

        const  user = await User.findById(id);

        if(!user){
            const error = new error("user not found");
            error.statusCode = 404;
            throw error; 
        }

        user.userName = req.body.userName;
        user.email = req.body.email;
        user.password = req.body.password;
        user.age = req.body.age;
        user.address = req.body.address;
          
         
        const updateUser  = await user.save();

        res.status(200).json({
        success: true,
        data: updateUser,
        message: "User update SuccessFully",
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}



exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params

        const userFind = await User.findById(id);

        if (!userFind) {
            const error = new error("student not found");
            error.statusCode = 404;
            throw error;
        }

        const deleteuser = userFind.remove();

        res.status(200).json({
            success: true,
            data: deleteuser,
            message: "User successfully deleted"
        })


    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}