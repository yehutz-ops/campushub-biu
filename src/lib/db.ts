import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Neon requires a WebSocket constructor in Node.js environments
neonConfig.webSocketConstructor = ws;

// Construct the Neon connection pool
const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });

// Instantiate the Neon driver adapter for Prisma
const adapter = new PrismaNeon(pool);

// Global Prisma instance to prevent excessive connections during development hot-reloads
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
