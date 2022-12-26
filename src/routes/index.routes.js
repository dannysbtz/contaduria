import { Router } from "express";
import{
  mainMenu,
  showList,
  listRoles,
  ordenar,
  busquedaId,
  RolId
} from '../controllers/practica.controller';

const router = Router();

router.get("/", mainMenu);
router.get("/lista", showList);
router.get("/lista_roles", listRoles);
router.get("/ordenar", ordenar);
router.get("/busqueda_id/:id", busquedaId);
router.get("/rol_id", RolId);



// router.post("/tasks/add", createTask);
// router.get("/edit/:id/task", renderTaskEdit);
// router.put("/edit/:id/task", editTask);
// router.delete("/delete/:id/task", deleteTask);

export default router;
