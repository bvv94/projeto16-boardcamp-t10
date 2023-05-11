import { Router } from "express"
import { getRentals, createRentals, returnRental, deleteRental } from "../controllers/rentals.controller.js"

const rentalsRouter = Router()

rentalsRouter.get("/rentals", getRentals)
rentalsRouter.post("/rentals", createRentals)
rentalsRouter.post("/rentals/:id/return", returnRental)
rentalsRouter.delete("/rentals:id", deleteRental)

export default rentalsRouter