const { connectToDb, getDb } = require("../db.js");
let db;
connectToDb((error) => {
  if (!error) {
    db = getDb();
  }
});

module.exports = class professorAv {
  createProfessorAv(req, res) {
    const { professor, day, startTime, endTime } = req.body;
    const prof = { professor, day, startTime, endTime };
    try {
      db.collection("ProfessorAvailability").insertOne(prof);
    } catch (err) {
      res.status(500).json({ err: "some error" });
    }
    res.send("its oke");
  }

  getProfessorAv(req, res) {
    const arr = [];

    db.collection("ProfessorAvailability")
      .find()
      .forEach((el) => { 
        if (
          el.professor.toLowerCase().includes(req.params.professor.toLowerCase()) &&
          !arr.includes(el)
        ) {
          arr.push(el)
        }
      })
      .then(() => { 
        res.status(200).json(arr);
      })
      .catch((err) => { 
        res.status(500).json({err:"some error"})
      })
  }
};
