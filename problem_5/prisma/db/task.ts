import { Prisma, Task, TypeTask } from '@prisma/client';

export const tasks = async (): Promise<Prisma.TaskCreateInput[]> => {
	const task: Prisma.TaskCreateInput[] = [
		{
			name: 'Task Create Task',
			description: 'This is a feat create task for individual employee',
			type: TypeTask.INDIVIDUAL,
		},
		{
			name: 'Task Update Task',
			description: 'This is a feat update task for group employees',
			type: TypeTask.GROUP,
		},
	];
	return task;
};
