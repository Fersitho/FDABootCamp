import express from "express"
import verifyToken from "../middlewares/auth.js"
import { createEvent, getListEvents,addUserGoEvent, getUserEvents, profitOneEvent, profitAllEvents } from "../controllers/eventsController.js"

const router = express.Router();

router.get("/", verifyToken, getListEvents)

router.post("/create-event", verifyToken, createEvent)

router.get("/attend", verifyToken, getUserEvents)

router.get("/add-attend/:idEvent", verifyToken, addUserGoEvent)

router.get("/profit-all-events", verifyToken,profitAllEvents )

router.get("/profit/:idEvent", verifyToken,profitOneEvent )

export default router