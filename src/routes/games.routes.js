import { Router } from "express"
import { createGames, getGames } from "../controllers/games.controller.js"
import { gameSchema } from "../schemas/game.schema.js"
import validateSchema from "../middlewares/validadeSchema.middleware.js"

const gamesRouter = Router()

gamesRouter.get("/games", getGames)
gamesRouter.post("/games", validateSchema(gameSchema) ,createGames)

export default gamesRouter