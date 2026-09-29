import { createSession, deleteSession } from "@/lib/auth/sessions";
import { NextResponse } from "next/server";

export async function POST() {
  await createSession();

  return NextResponse.json({
    success: true,
  });
}

export async function DELETE() {
  await deleteSession();

  return NextResponse.json({
    success: true,
  });
}
