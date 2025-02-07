// src/app/api/orders/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(request: Request) {
  try {
    const {
      customerName,
      email,
      phone,
      address,
      city,
      postalCode,
      items,
      totalAmount,
    } = await request.json();

    const order = await client.create({
      _type: "order",
      customerName,
      email,
      phone,
      address,
      city,
      postalCode,
      items,
      totalAmount,
      status: "pending",
    });

    return NextResponse.json(
      { success: true, orderId: order._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create order" },
      { status: 500 }
    );
  }
}
