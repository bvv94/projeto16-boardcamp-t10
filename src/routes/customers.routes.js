import { Router } from "express"
import { createCustomers, getCustomers, getCustomersById, updateCustomers } from "../controllers/customers.controller.js"

const customersRouter = Router()

customersRouter.get ("/customers", getCustomers)
customersRouter.get ("/customers/:id", getCustomersById)
customersRouter.post ("/customers", createCustomers)
customersRouter.put ("/customers/:id", updateCustomers)

export default customersRouter