// instância do banco de dados
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined
}

const db = globalThis.prisma || new PrismaClient(); 
// faz com que o hot reload não crie múltiplas instâncias do client

if(process.env.NODE_ENV !== "production"){
  globalThis.prisma = db;
};

export default db;