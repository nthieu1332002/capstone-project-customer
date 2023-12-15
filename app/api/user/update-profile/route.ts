import { axios } from "@/lib/axios";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
    try {
        const values = await req.json();
        await axios.put("/api/customer/profile/me", values);
        return new NextResponse("Cập nhật thông tin thành công!", { status: 200 });

    } catch (error: any) {
        console.log(error.response.data.message);
        return new NextResponse(error.response.data.message, { status: error.response.status })
    }
}