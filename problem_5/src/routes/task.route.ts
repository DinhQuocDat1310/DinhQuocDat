import express, { Router } from 'express';
import { TaskController } from '../controllers/task.controller';
import {
	validateCreateTask,
	validateUpdateTask,
} from '../utils/task.validation';

const router: Router = express.Router();
const taskController: TaskController = new TaskController();
const originPath: string = '/task';

/**
 * @swagger
 * tags:
 *   - name: Task
 *     description: API managing Tasks.
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         type:
 *           type: string
 *           enum: [INDIVIDUAL, GROUP]
 *       required:
 *         - name
 *         - type
 * paths:
 *   /task/list:
 *     get:
 *       summary: Get all tasks
 *       description: Get all tasks
 *       tags: [Task]
 *       responses:
 *         200:
 *           description: Successful
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Task'
 *         500:
 *           description: Internal server error
 *   /task/detail/{id}:
 *     get:
 *       summary: Get task details
 *       description: Get details of a specific task
 *       tags: [Task]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The id of the task
 *       responses:
 *         200:
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Task'
 *         400:
 *           description: Bad request
 *         500:
 *           description: Internal server error
 *   /task/search:
 *     get:
 *       summary: Filter tasks by query name and type of task
 *       description: Search tasks based on query parameters
 *       tags: [Task]
 *       parameters:
 *         - in: query
 *           name: name
 *           schema:
 *             type: string
 *           required: false
 *           description: The search query name
 *         - in: query
 *           name: type
 *           schema:
 *             type: string
 *           required: false
 *           description: The search query type
 *       responses:
 *         200:
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Task'
 *         400:
 *           description: Bad request
 *         500:
 *           description: Internal server error
 *   /task:
 *     post:
 *       summary: Create a new task
 *       description: Create a new task with the provided details
 *       tags: [Task]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       responses:
 *         201:
 *           description: Task created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Task'
 *         400:
 *           description: Bad request
 *         500:
 *           description: Internal server error
 *   /task/{id}:
 *     put:
 *       summary: Update an existing task
 *       description: Update an existing task with the provided details
 *       tags: [Task]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The id of the task to update
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       responses:
 *         200:
 *           description: Task updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Task'
 *         400:
 *           description: Bad request
 *         500:
 *           description: Internal server error
 *     delete:
 *       summary: Delete a task
 *       description: Delete a task with the provided id
 *       tags: [Task]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The id of the task to delete
 *       responses:
 *         200:
 *           description: Task deleted successfully
 *         404:
 *           description: Task not found
 *         500:
 *           description: Internal server error
 */

router.get(originPath + '/list', taskController.getAllTasks);
router.get(originPath + '/detail/:id', taskController.getTaskDetails);
router.get(originPath + '/search', taskController.searchTaskByQuery);
router.post(originPath, validateCreateTask, taskController.createTask);
router.put(originPath + '/:id', validateUpdateTask, taskController.updateTask);
router.delete(originPath + '/:id', taskController.deleteTask);

export default router;
