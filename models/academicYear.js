const { connectToDb, getDb } = require("../db.js");
let db;
connectToDb((error) => {
  if (!error) {
    db = getDb();
  }
});

module.exports = class academicYear {
  createAcademyYear(req, res) {
    const { name, startYear, endYear } = req.body;
    const academyYear = { name, startYear, endYear };
    if (
      typeof name === "string" &&
      typeof startYear === "number" &&
      typeof endYear === "number"
    ) {
      try {
        db.collection("AcademicYears").insertOne(academyYear);
      } catch (error) {
        res.status(500).json({ error: "Something's gone wrong" });
      }
    } else {
      res.status(400).json({ error: "some param is wrong" });
    }
    res.send("the req is added in db");
  }

  getAcademyYear(req, res) {
    const arr = [];

    db.collection("AcademicYears")
      .find()
      .forEach((el) => {
        if (
          el.name.toLowerCase().includes(req.params.name.toLowerCase()) &&
          !arr.includes(el)
        ) {
          arr.push(el);
        } else {
          console.log(`el.name: ${el.name}`);
          console.log(`req.params.name: ${req.params.name}`);
          console.log(el.name === req.params.name)
        }
      })
      .then(() => {
        res.status(200).json(arr);
      })
      .catch((err) => {
        res.status(500).json({ err: "Could not find posts by title" });
      });
  }
};
