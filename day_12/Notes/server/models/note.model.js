const mongoose = require('mongoose')


const NoteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: [true, "Note Title is required"],
            minlength: [3, "Title must be at least 3 characters long"]
        },
        content: {
            type: String,
            required: [true, "Note Content is required"],
            minlength: [3, "Content must be at least 3 characters long"]
        },
        isImportant: {
            type: Boolean,       
            default: false
        }
    },
    {timestamps: true}
)

// const Note = mongoose.model("Note", NoteSchema)
// module.exports = Note

module.exports = mongoose.model("Note", NoteSchema)