import { axios } from "@/lib/axios";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const data = await req.json();
        const res = await axios.post("/api/customer/orders", data);
        return NextResponse.json(res.data);

    } catch (error: any) {
        console.log(error);
        return new NextResponse(error.response.data.message, { status: error.response.status })

    }
}