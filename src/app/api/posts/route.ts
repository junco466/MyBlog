// app/api/users/route.ts (Next.js 14+ con App Router)
import { prisma } from "@/utils/prisma";
import { Post } from "@prisma/client";
import { NextResponse } from "next/server";

// Obtener categorias
export const GET = async (req:Request) => {
  const {searchParams} = new URL(req.url)

  const page = parseInt(searchParams.get("page") || "1",10)
  const cat = searchParams.get("cat")

  const POST_PER_PAGE = 2;

  try {

    //Single request, solo para realizar una solo request
    // const posts:Post[] = await prisma.post.findMany({
    //   take:POST_PER_PAGE,
    //   skip: POST_PER_PAGE * (page-1)
    // });

    const query = {
      take:POST_PER_PAGE,
      skip: POST_PER_PAGE * (page-1),
      where: {
        ...(cat && {catSlug: cat})
      }
    }
    //Multiple requests, puedo realizar varias consultas a la vez
    const [posts, count]:[Post[],number] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({where:query.where}),
    ])
    return NextResponse.json({posts,count}, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "something went wrong!" },
      { status: 500 }
    );
  }
};

//Ejemplo de tutorial, desactualizado
// export const GET = async () => {
//   try {
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "something went wrong!" }, { status: 500 })
//     );
//   }
// };

// export async function GET() {
//   const users = await prisma.user.findMany();
//   return NextResponse.json(users);
// }
