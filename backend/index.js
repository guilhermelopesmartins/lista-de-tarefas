const express = require("express");
const app = express();
const noteController = require("./controller/noteController");
const sectionController = require("./controller/sectionController");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig'); 

//MIDDLEWARE
app.use(express.json())

//NOTES ROUTES
app.post("/notes", noteController.createNote);

app.get("/notes", noteController.getAllNotes);

app.get("/notes/:id", noteController.getFromSection);

app.put("/notes", noteController.updateNote);

app.delete("/notes/:id", noteController.deleteNote);

//SECTION ROUTES
app.get('/sections', sectionController.getAllSections);

app.post('/sections', sectionController.createSection);

app.get('/sections/:id', sectionController.getFromUser);

app.put('/sections', sectionController.updateSection);

app.delete('/sections/:id', sectionController.deleteSection)

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//PORT
app.listen(8989, () => {
    console.log("Server is running on port 8989")
})