import express, { Router } from 'express';
import { TaskController } from '../controllers/task.controller';
import {
	validateCreateTask,
	validateUpdateTask,
} from '../utils/task.validation';

const router: Router = express.Router();
const taskController: TaskController = new TaskController();
const originPath: string = '/task';

router.get(originPath + '/list', taskController.getAllTasks);
router.get(originPath + '/detail/:id', taskController.getTaskDetails);
router.get(originPath + '/search', taskController.searchTaskByQuery);
router.post(originPath, validateCreateTask, taskController.createTask);
router.put(originPath + '/:id', validateUpdateTask, taskController.updateTask);
router.delete(originPath + '/:id', taskController.deleteTask);

export default router;
