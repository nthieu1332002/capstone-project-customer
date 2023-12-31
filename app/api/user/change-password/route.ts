import { axios } from "@/lib/axios";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
    try {
        const values = await req.json();
        await axios.put("/api/customer/auth/password", values);
        
        return new NextResponse("Đổi mật khẩu thành công!", { status: 200 });

    } catch (error: any) {
        return new NextResponse(error.response.data.message, { status: error.response.status })
    }
}