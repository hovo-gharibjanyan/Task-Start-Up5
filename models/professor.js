const { connectToDb, getDb } = require("../db.js");
let db;
connectToDb((error) => {
  if (!error) {
    db = getDb();
  }
});

module.exports = class professor {
  createProfessor(req, res) {
    const { firstName, lastName } = req.body;
    const professor = { firstName, lastName };
    try {
      db.collection("Professor").insertOne(professor);
    } catch (err) {
      res.status(500).json({ err: "some error" });
    }
    res.send("its oke");
  }

  getProfessor(req, res) {
    const arr = [];

    db.collection("Professor")
      .find()
      .forEach((el) => {
        if (
          el.firstName
            .toLowerCase()
            .includes(req.params.firstName.toLowerCase()) &&
          !arr.includes(el)
        ) {
          arr.push(el);
        }
      })
      .then(() => {
        res.status(200).json(arr);
      })
      .catch((err) => {
        res.status(500).json({ err: "some error" });
      });
  }
};
