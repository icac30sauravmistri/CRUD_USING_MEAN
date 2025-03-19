import User from "../models/User.js";

export const create = async (req, res) => {
    try {
        const users = new User(req.body);

        if (!users) {
            return res.status(404).json({ message: "Oops! User data not found!" })
        }

        const saved_data = await users.save();
        res.status(200).json(saved_data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (!users) {
            return res.status(404).json({ message: "Oops! User data not found!" })
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}