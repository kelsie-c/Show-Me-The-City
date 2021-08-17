const db = require("../models");

// Defining methods for the postController
module.exports = {
  findAll: function(req, res) {
    db.Recs.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByLocation: function(req, res) {
    console.log(req);
    db.Recs.find({location: req.params.location}) // toLowerCase
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err.message));
  },
  findByCategory: function(req, res) {
    console.log(req);
    db.Recs.find({location: req.params.location, category: req.params.category})
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err.message));
  },
  findById: function(req, res) {
    db.Recs.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserRecs: function (req, res) {
    db.Recs.find({userID: req.params.userID})
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err.message));
  },
  create: function(req, res) {
    db.Recs.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Recs.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Recs.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
