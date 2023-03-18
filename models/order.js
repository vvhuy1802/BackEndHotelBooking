const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  id_room: { type: mongoose.Schema.Types.ObjectId, ref: "room" },
  id_hotel: { type: String, default: "" },
  check_in: { type: String, default: "" },
  check_out: { type: String, default: "" },
  total: { type: Number, default: 0 },
  status: { type: String, default: "Pending" },
  number_person: { type: Number, default: 1 },
  payment_method: { type: String, default: "hotel" },
  paymented: { type: Boolean, default: false },
  reviewed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("order", orderSchema);
