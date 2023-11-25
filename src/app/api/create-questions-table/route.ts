import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Question ( id INT PRIMARY KEY, question VARCHAR(255) NOT NULL, answersNumber INT, createdAt DATETIME NOT NULL, rank INT CHECK (rank >= 1 AND rank <= 10))`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
