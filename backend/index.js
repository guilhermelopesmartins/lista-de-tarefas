const express = require("express");
const app = express();
const noteController = require("./controller/noteController");
const sectionController = require("./controller/sectionController");
const boardController = require("./controller/boardController");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig'); 

//MIDDLEWARE
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
    next();
  })
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

app.delete('/sections/:id', sectionController.deleteSection);

//BOARDS ROUTES
app.get('/boards', boardController.getAllBoards);

app.post('/boards', boardController.createBoard);

app.get('/boards/:id', boardController.getFromUser);

app.put('/boards', boardController.updateBoard);

app.delete('/boards/:id', boardController.deleteBoard);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//PORT
app.listen(8989, () => {
    console.log("Server is running on port 8989")
})