import { db } from "../database/database.connection.js"

export async function getRentals(req, res) {
    try {
        const rentals = await db.query(`SELECT * FROM rentals`)

        res.send(rentals.rows)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

export async function createRentals(req, res) {
    const { customerId, gameId, daysRented } = req.body

    try {
        await db.query(`INSERT INTO rentals (customerId, gameId, daysRented)
                        VALUES ($1, $2, $3)`, [customerId, gameId, daysRented])
        res.sendStatus(201)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

export async function returnRental(req, res) {
    try {

    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteRental(req, res) {
    try {

    }
    catch (err) {
        res.status(500).send(err.message)
    }
}