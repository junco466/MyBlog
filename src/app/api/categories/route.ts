// app/api/users/route.ts (Next.js 14+ con App Router)
import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// Obtener categorias
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories, { status: 200 });
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
