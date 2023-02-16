const UserModel = require("../model/User");
const { findByIdAndUpdate } = require("../model/User");

const first = function (req, res) {
  res.send("Fast, unopinionated, minimalist web framework for Node.js.");
};

const createData = async (req, res) => {
  const newData = new UserModel({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    role: "1",
  });
  const dataSave = await newData.save();
  res.send(dataSave);
};

const updateData = async (req, res) => {
  const findUpdated = await UserModel.findByIdAndUpdate(
    { _id: req.body.id },
    {
      email: req.body.email,
      name: req.body.name,
    }
  );
  const findData = await UserModel.findById({ _id: req.body.id });
  res.send(findData);
};
const deleteData = async (req, res) => {
 const deleteRecord = await UserModel.findByIdAndDelete({ _id: req.body.id });
 res.send("delete Successfully");
}

module.exports = {
  first,
  createData,
  updateData,
  deleteData
};
