import getServerUser from "@/actions/getServerUser";
import { axios } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        const { data } = await req.json()
        const session = await getServerUser();
        if (session) {
            return new NextResponse("Session already exists", {
                status: 403,
            });
        }
        const res = await axios.post('/api/customer/register', data)
        return NextResponse.json(res.data.data);

    } catch (error: any) {
        console.log(error.response.data.message);
        return new NextResponse(error.response.data.message, { status: error.response.status })
    }
}