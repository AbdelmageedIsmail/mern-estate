import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res) => {
    console.log(req.body);

    const {username, email, password } = req.body;
    const hashedPAssword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username, email, hashedPAssword
    });

    try {
        await newUser.save();

        res.status(201).json({
            message: 'User Created Successfuly!',
        });

    } catch (error) {
        next(error);
    }

};