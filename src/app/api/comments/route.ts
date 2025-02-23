// app/api/users/route.ts (Next.js 14+ con App Router)
import { prisma } from "@/utils/prisma";
import { Comment } from "@prisma/client";
import { NextResponse } from "next/server";
import {auth} from "@/utils/auth"


// GET ALL COMMENTS OF A POST
export const GET = async (req:Request) => {
  
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug")

  try {
    const comments: Comment[] | null = await prisma.comment.findMany({
      where: { 
        ...(postSlug && {postSlug}),
       },
      include: { user: true },
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "something went wrong!" },
      { status: 500 }
    );
  }
};


// CREATE A COMMENT OF A POST
export const POST = async (req:Request) => {
  
  const session = await auth()
  if (!session){
    return NextResponse.json({message: "Not Authenticated"}, { status: 401 });
  }

  try {
    const body = await req.json()
    const comments: Comment | null = await prisma.comment.create({
      data: {...body, userEmail: session.user?.email}
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "something went wrong!" },
      { status: 500 }
    );
  }
};



