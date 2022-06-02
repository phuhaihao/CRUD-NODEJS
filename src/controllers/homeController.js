import pool from '../config/connectDB'

const homeController = async (req, res) => {

    const [rows, fields] = await pool.execute("SELECT * FROM users");
    return res.render('home', {rows});
}

export {
    homeController
}