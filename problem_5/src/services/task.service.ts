import { Prisma, PrismaClient, Task, TypeTask } from '@prisma/client';

export class TaskService {
	private prisma;

	constructor() {
		this.prisma = new PrismaClient();
	}

	createTask = (
		task: Prisma.TaskCreateInput
	): Promise<Prisma.TaskCreateInput> => {
		return this.prisma.task.create({
			data: task,
		});
	};

	updateTask = async (
		id: string,
		task: Prisma.TaskUpdateInput
	): Promise<Prisma.TaskUpdateInput> => {
		const { name, type, description } = task;
		return await this.prisma.task.update({
			where: {
				id,
			},
			data: {
				name,
				type,
				description,
			},
		});
	};

	deleteTask = async (id: string): Promise<object> => {
		const task: Task = await this.prisma.task.delete({
			where: {
				id,
			},
		});
		return {
			message: `Task ID: ${task.id} deleted`,
		};
	};

	getAllTasks = async (): Promise<Task[]> => {
		return await this.prisma.task.findMany({});
	};

	searchTaskByQuery = async (
		name: string | undefined,
		type: TypeTask
	): Promise<Task[]> => {
		return await this.prisma.task.findMany({
			where: {
				OR: [
					{
						name: {
							contains: name,
						},
					},
					{
						type,
					},
				],
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
	};

	getTaskById = async (id: string): Promise<Task | null> => {
		const task: Task | null = await this.prisma.task.findUnique({
			where: {
				id,
			},
		});
		if (!task) return null;
		return task;
	};
}
