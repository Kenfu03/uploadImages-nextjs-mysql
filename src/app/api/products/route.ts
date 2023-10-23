import { NextRequest, NextResponse } from "next/server";
import { productRequest } from "@/types/product";
import { conn } from "@/libs/mysql";

export async function GET() {
  try {
    const results = await conn.query("SELECT * FROM product");
    return NextResponse.json(results);
  } catch (error) {
    if (error instanceof Error){
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function POST(request: Request) {
  try {
    const { name, description, price }: productRequest = await request.json();
    const result: any = await conn.query("INSERT INTO product SET ?", {
      name,
      description,
      price,
    });
    return NextResponse.json({
      name,
      description,
      price,
      id: result.insertId,
    });
  } catch (error) {
    if (error instanceof Error){
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
