import { Router } from "express";
import Task from "../models/Task";
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);
router.post("/tasks/add", createTask);
router.get("/edit/:id/task", renderTaskEdit);
router.put("/edit/:id/task", editTask);
router.delete("/delete/:id/task", deleteTask);

export default router;
