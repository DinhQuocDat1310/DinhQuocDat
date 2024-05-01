import { PrismaClient } from '@prisma/client';
import { tasks } from './db/task';

async function main() {
	const prisma = new PrismaClient();
	const task = await tasks();
	try {
		for (const dto of task) {
			await prisma.task.create({
				data: dto,
			});
		}
	} catch (error) {
		console.log(error);
		process.exit(1);
	} finally {
		prisma.$disconnect();
	}
}

main();
