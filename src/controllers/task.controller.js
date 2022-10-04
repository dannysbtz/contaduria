import Task from "../models/Task";
import mongoose  from "mongoose";

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
};

export const renderTaskEdit = async (req, res) => {
  try {
    var task = await Task.findById(req.params.id).lean();
  } catch (error) {
    console.log(error);
  }
  res.render("edit", { task });
};

export const editTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
};
