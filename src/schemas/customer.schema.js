import joi from "joi"

export const customerSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string().min(10).max(11),
    cpf: joi.string().length(11),
    birthday: joi.date()
})