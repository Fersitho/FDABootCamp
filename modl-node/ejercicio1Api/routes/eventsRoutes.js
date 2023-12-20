const router = require("express").Router();
const verifyToken = require("../middlewares/auth");

const { createEvent, getListEvents,addUserGoEvent, getUserEvents, profitOneEvent, profitAllEvents } = require("../controllers/eventsController");

router.get("/", verifyToken, getListEvents)

router.post("/create-event", verifyToken, createEvent)

router.get("/attend", verifyToken, getUserEvents)

router.get("/add-attend/:idEvent", verifyToken, addUserGoEvent)

router.get("/profit-all-events", verifyToken,profitAllEvents )
router.get("/profit/:idEvent", verifyToken,profitOneEvent )

module.exports = router