import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("visionCare");

  const collections = await db.collections();
  return NextResponse.json({
    databaseName: db.databaseName,
    collections: collections.map(c => c.collectionName),
    connectedUser: process.env.MONGODB_URI?.split(":")[1]?.replace("//",""),
  });
}
