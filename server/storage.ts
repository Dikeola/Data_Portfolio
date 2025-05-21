import { type User, type InsertUser } from "@shared/schema.js";
import { dbStorage } from "./db.js";
import { MemStorage } from "./mem-storage.js";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

// Use database storage in production, in-memory storage in development
export const storage = process.env.NODE_ENV === 'production' 
  ? dbStorage 
  : new MemStorage();
