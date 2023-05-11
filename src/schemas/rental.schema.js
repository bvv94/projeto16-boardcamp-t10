import joi from "joi"

export const rentalSchema = joi.object({
    customerId: joi.number().required(),
    gameId: joi.string().uri(),
    daysRented: joi.number().integer().positive()
})