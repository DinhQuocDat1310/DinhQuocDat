import { Request, Response } from 'express';
import { TaskService } from '../services/task.service';
import { Prisma, Task } from '@prisma/client';
import { Result, ValidationError, validationResult } from 'express-validator';

export class TaskController {
	private taskService;

	constructor() {
		this.taskService = new TaskService();
	}

	createTask = async (req: Request, res: Response): Promise<void> => {
		const errors: Result<ValidationError> = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(400).json({ errors: errors.array() });
			return;
		}
		const data = req.body;
		try {
			const task: Prisma.TaskCreateInput =
				await this.taskService.createTask(data);
			res.status(201).json(task);
		} catch (error) {
			res.status(400).json(error);
		}
	};

	updateTask = async (req: Request, res: Response): Promise<void> => {
		const errors: Result<ValidationError> = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(400).json({ errors: errors.array() });
			return;
		}
		const data = req.body;
		const { id } = req.params;
		try {
			const existedTask: Task | null = await this.taskService.getTaskById(
				id
			);
			if (!existedTask) {
				res.status(400).json({ errors: 'Task ID not found' });
				return;
			}
			const task: Prisma.TaskUpdateInput =
				await this.taskService.updateTask(id, data);
			res.status(200).json(task);
		} catch (error) {
			res.status(400).json(error);
		}
	};

	deleteTask = async (req: Request, res: Response): Promise<void> => {
		const { id } = req.params;
		try {
			const existedTask: Task | null = await this.taskService.getTaskById(
				id
			);
			if (!existedTask) {
				res.status(400).json({ errors: 'Task ID not found' });
				return;
			}
			const message: Object = await this.taskService.deleteTask(id);
			res.status(200).json(message);
		} catch (error) {
			res.status(400).json(error);
		}
	};

	getTaskDetails = async (req: Request, res: Response): Promise<void> => {
		const { id } = req.params;
		try {
			const existedTask: Task | null = await this.taskService.getTaskById(
				id
			);
			if (!existedTask) {
				res.status(400).json({ errors: 'Task ID not found' });
				return;
			}
			res.status(200).json(existedTask);
		} catch (error) {
			res.status(400).json(error);
		}
	};

	getAllTasks = async (req: Request, res: Response): Promise<void> => {
		try {
			const tasks: Task[] = await this.taskService.getAllTasks();
			res.json(tasks);
		} catch (error) {
			res.status(500).json(error);
		}
	};
}
