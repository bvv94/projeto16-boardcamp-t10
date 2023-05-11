import joi from "joi"

export const rentalSchema = joi.object({
    customerId: joi.number().required(),
    gameId: joi.number().integer().positive(),
    daysRented: joi.number().integer().positive()
})