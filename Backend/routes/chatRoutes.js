const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatController");

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").patch(protect, renameGroup);
router.route("groupadd").patch(protect, addToGroup);
router.route("/groupremove").patch(protect, removeFromGroup);

module.exports = router;
