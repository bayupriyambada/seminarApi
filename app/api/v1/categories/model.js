const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let categoriesSchema = Schema(
  {
    name: {
      type: String,
      minLength: [3, 'Minimum name 3 characters'],
      maxLength: [50, 'Maximum name 50 characters'],
      required: [true, 'Category name cannot be empty']
    },
  },
  {
    timestamps: true
  }
)

module.exports = model('Category', categoriesSchema)