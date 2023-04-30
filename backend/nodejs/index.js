const express = require('express');
const mysql2 = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json())

const PORT = 8000;

const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

const getAllChores = async () => {
    const allChores = await pool.query("SELECT * FROM chores;")
    return allChores[0];
}

const addChore = async (chore) => {
    const addChore = await pool.query(`INSERT INTO chores(chore) VALUES(?);`, [chore])
    return addChore;
}

const deleteChore = async (id) => {
    const delChore = await pool.query("DELETE FROM chores WHERE id = ?;", [id]);
    return delChore;
}

app.get("/", async (req, res) => {
    const results = await getAllChores();
    res.json(results);
})

app.post("/add", async (req, res) => {
    const {item} = req.body;
    const add = await addChore(item);
    res.status(201).json(add);
})

app.delete("/remove/:id", async (req, res) => {
    const delID = req.params.id;
    const results = deleteChore(delID);
    res.json(results);
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})