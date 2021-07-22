const { PostCards } = require("../models/PostCards");
const ObjectID = require("mongoose").Types.ObjectId;

exports.getPosts = (req, res, next) => {
  PostCards.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while retrieving all records: " +
          JSON.stringify(err, undefined, 2)
      );
  });
};

exports.createPosts = (req, res, next) => {
  const newCard = new PostCards({
    title: req.body.title,
    description: req.body.description,
    types: req.body.types,
    date: req.body.date,
  });
  newCard.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while Creating new records: " + JSON.stringify(err, undefined, 2)
      );
  });
};

exports.updatePosts = (req, res, next) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("No record with given id:" + req.params.id);
  }
  const updateCard = {
    title: req.body.title,
    description: req.body.description,
    types: req.body.types,
    date: req.body.date,
  };
  PostCards.findByIdAndUpdate(
    req.params.id,
    { $set: updateCard },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          "Error while Updating a records: " + JSON.stringify(err, undefined, 2)
        );
    }
  );
};

exports.deletePosts = (req, res, next) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("No record with given id:" + req.params.id);
  }
  PostCards.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while deleting a records: " + JSON.stringify(err, undefined, 2)
      );
  });
};
