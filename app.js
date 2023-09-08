const express = require('express')
const { connectToDb, getDb } = require('./db.js');
const dotenv = require('dotenv');
const academyYear = require('./route/rout.js');
const dayOfWeek = require('./route/routDayOfWeek.js');
const groups = require('./route/groupsRout.js');
const lesson = require('./route/lessonRout.js');
const object = require('./route/objectRoute.js');
const profAv = require('./route/professorAvRoute.js');
const prof = require('./route/professorRoute.js');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(academyYear)
app.use(dayOfWeek)
app.use(groups)
app.use(lesson)
app.use(object)
app.use(profAv)
app.use(prof)

let db;

connectToDb((error) => {
    if (!error) {
        app.listen(PORT, (error) => {
            error ? console.log(error) : console.log(`the PORT ${PORT} is listening`);
        });
        db = getDb();
    }
});