const express = require("express");
const app = express();
const noteController = require("./controller/noteController");

//MIDDLEWARE
app.use(express.json())

//ROUTES
app.post("/notes", noteController.createNote)

app.get("/notes", noteController.getAllNotes)

app.get("/notes/:id", noteController.getOneNote)

app.put("/notes/:id", noteController.updateOneNote);

app.delete("/notes/:id", noteController.deleteOneNote)

//PORT
app.listen(8989, () => {
    console.log("Server is running on port 8989")
})