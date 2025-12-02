import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTools() {
  try {
    const tools = await prisma.tool.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        category: true,
        image: true,
        updatedAt: true,
        createdAt: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return tools.map(tool => ({
      ...tool,
      updatedAt: tool.updatedAt.toISOString(),
      createdAt: tool.createdAt.toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching tools:', error);
    return [];
  }
}

export async function getCategories() {
  try {
    const categories = await prisma.tool.groupBy({
      by: ['category'],
      _count: {
        id: true,
      },
      orderBy: {
        _count: {
          id: 'desc',
        },
      },
    });

    return categories.map(cat => cat.category);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
