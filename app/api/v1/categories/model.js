const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let categorySchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, "panjang nama minimal 3 karakter"],
      maxLength: [20, "panjang nama maksimal 20 karakter"],
      required: [true, "harus diisi"],
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Category", categorySchema);
