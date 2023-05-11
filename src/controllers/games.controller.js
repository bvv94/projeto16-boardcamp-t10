import { db } from "../database/database.connection.js"

export async function getGames(req, res) {
    try {
        const games = await db.query(`SELECT * FROM games;`)
        res.send(games.rows)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

export async function createGames(req, res) {
    const { name, image, stockTotal, pricePerDay } = req.body

    try {
        const games = await db.query(`SELECT * FROM games`)
        const exist = games.rows.find((g) => g.name === name)
        if (exist) return res.status(409).send("Jogo já existe")

        await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") 
                        VALUES ($1, $2, $3, $4);`, [name, image, stockTotal, pricePerDay])
        res.sendStatus(201)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}