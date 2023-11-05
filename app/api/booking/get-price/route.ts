import { axios } from "@/lib/axios";
import { NextResponse } from "next/server";
import queryString from "query-string";

export const GET = async (req: Request) => {
    try {
        const { searchParams } = new URL(req.url)
        const length = searchParams.get('length')
        const width = searchParams.get('width')
        const height = searchParams.get('height')
        const weight = searchParams.get('weight')
        const url = queryString.stringifyUrl(
            {
                url: "/api/customer/prices",
                query: {
                    length: length,
                    width: width,
                    height: height,
                    weight: weight,
                    distance: 112,
                },
            },
            { skipNull: true }
        );
        const res = await axios.get(url);
        return Response.json(res)

    } catch (error: any) {
        console.log(error);
        return new NextResponse(error.response.data.message, { status: error.response.status })

    }
}