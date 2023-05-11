import { Router } from "express"
import { createCustomers, getCustomers, getCustomersById, updateCustomers } from "../controllers/customers.controller.js"
import { customerSchema } from "../schemas/customer.schema.js"
import validateSchema from "../middlewares/validadeSchema.middleware.js"

const customersRouter = Router()

customersRouter.get("/customers", getCustomers)
customersRouter.get("/customers/:id", getCustomersById)
customersRouter.post("/customers", validateSchema(customerSchema), createCustomers)
customersRouter.put("/customers/:id", validateSchema(customerSchema), updateCustomers)

export default customersRouter