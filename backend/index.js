const express = require("express");
const app = express();
const noteController = require("./controller/noteController");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig'); 

//MIDDLEWARE
app.use(express.json())

//ROUTES
app.post("/notes", noteController.createNote)

app.get("/notes", noteController.getAllNotes)

app.get("/notes/:id", noteController.getFromSection)

app.put("/notes", noteController.updateNote);

app.delete("/notes/:id", noteController.deleteNote)

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//PORT
app.listen(8989, () => {
    console.log("Server is running on port 8989")
})