import pool from '../config/connectDB'

const getUserAPIController = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM users");
    return res.status(200).json(rows)
}

export {
    getUserAPIController
}