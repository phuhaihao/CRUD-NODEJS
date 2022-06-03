import pool from '../config/connectDB'


const homeController = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM users");
    return res.render('home', {rows});
}

const detailUserController = async (req, res) => {
    const userId = req.params.id
    const [rows, fields] = await pool.execute("SELECT * FROM `users` WHERE `id` = ?", [userId]);
    return res.render('detail', {rows})
}

const createUserController = async (req,res) => {

    await pool.execute("INSERT INTO `users` (username, password, email, phone) VALUES(?, ?, ?, ?)", 
        [req.body.username, req.body.password, req.body.email, req.body.phone]);
    return res.redirect('/');
}

const updateUserController = async (req, res) => {
    const userId = req.params.id
    const [rows, fields] = await pool.execute("SELECT * FROM `users` WHERE `id` = ?", [userId]);
    return res.render('update', {rows})
}

const updatedUserController = async (req, res) => {
    await pool.execute("UPDATE `users` SET username = ?, password = ?, email = ?, phone = ? WHERE `id` = ?", 
        [req.body.username, req.body.password, req.body.email, req.body.phone, req.body.id]);
    return res.redirect('/');
}

const deleteleUserController = async (req, res) => {
    await pool.execute('DELETE FROM users WHERE id=?', [req.params.id])
    return res.redirect('/');
}

export {
    homeController, 
    detailUserController,
    createUserController,
    updateUserController,
    updatedUserController,
    deleteleUserController
}