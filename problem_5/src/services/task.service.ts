import { Prisma, PrismaClient, Task } from '@prisma/client';

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

	getAllTasks = async (): Promise<Task[]> => {
		return this.prisma.task.findMany({});
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
