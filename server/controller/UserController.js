import User from "../models/User.js";

export const create = async (req, res) => {
    try {
        const users = new User(req.body);

        if (!users) {
            return res.status(404).json({ message: "Oops! User data not found!" })
        }

        const saved_data = await users.save();
        res.status(200).json(saved_data, { message: "User created successfully!" });
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

export const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if (!userExist) {
            return res.status(404).json({ message: "Oops! User data not found!" })
        }

        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if (!userExist) {
            return res.status(404).json({ message: "Oops! User data not found!" })
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedData, { message: "User details updated successfully!" });

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if (!userExist) {
            return res.status(404).json({ message: "Oops! User data not found!" })
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "Whoohoo! User data deleted successfully!" });

    } catch (error) {
        res.status(500).json({ error: error });
    }
}