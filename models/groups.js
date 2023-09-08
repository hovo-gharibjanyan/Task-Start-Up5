const { connectToDb, getDb } = require("../db.js");
let db;
connectToDb((error) => {
  if (!error) {
    db = getDb();
  }
});

module.exports = class groups { 
    createGroup(req, res) { 
        const { groupName } = req.body;
        const group = { groupName }
        try { 
            db.collection("Group").insertOne(group)
        } catch (error) { 
            res.status(500).json({err: 'some error'})
        }
        res.send('its oke')
    }

    getGroup(req, res) { 
        try {
            db.collection("Group")
              .find()
              .toArray()
              .then((result) => {
                res.status(200).json(result);
              })
              .catch((err) => {
                res.status(500).json({ error: "Some error occurred while fetching dayOfWeeks" });
              });
          } catch (error) {
            res.status(500).json({ error: "Some error occurred" });
          }
    }
}