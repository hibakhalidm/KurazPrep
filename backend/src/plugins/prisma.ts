import fp from 'fastify-plugin';
import { PrismaClient } from '@prisma/client';
import type { FastifyPluginAsync } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

const prismaPlugin: FastifyPluginAsync = async (server) => {
  const prisma = new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['error', 'warn']
        : ['error'],
  });

  await prisma.$connect();
  server.log.info('✅ Connected to SQLite via Prisma');

  // Decorate the fastify instance with prisma
  server.decorate('prisma', prisma);

  // Hook into application shutdown
  server.addHook('onClose', async (server) => {
    await server.prisma.$disconnect();
    server.log.info('Disconnected from SQLite');
  });
};

export default fp(prismaPlugin, { name: 'prisma' });
