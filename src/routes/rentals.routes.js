import { Router } from "express"
import { getRentals, createRentals, returnRental, deleteRental } from "../controllers/rentals.controller.js"
import validadeSchema from "../middlewares/validadeSchema.middleware.js"
import { rentalSchema } from "../schemas/rental.schema.js"

const rentalsRouter = Router()

rentalsRouter.get("/rentals", getRentals)
rentalsRouter.post("/rentals", validadeSchema(rentalSchema), createRentals)
rentalsRouter.post("/rentals/:id/return", returnRental)
rentalsRouter.delete("/rentals:id", deleteRental)

export default rentalsRouter