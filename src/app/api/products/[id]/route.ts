import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json("Obteniendo un producto");
}

export function DELETE(){
    return NextResponse.json("Eliminado producto");
}

export function PUT(){
    return NextResponse.json("Actualizando producto");
}