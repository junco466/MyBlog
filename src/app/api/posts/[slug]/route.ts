// app/api/users/route.ts (Next.js 14+ con App Router)
import { prisma } from "@/utils/prisma";
import { Post } from "@prisma/client";
import { NextResponse } from "next/server";

interface Params {
  params: {
    slug: string;
  };
}

// GET SINGLE POST
export const GET = async (req: Request, { params }: Params) => {
  
  const { slug } = await params;

  try {
    const post: Post | null = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "something went wrong!" },
      { status: 500 }
    );
  }
};
