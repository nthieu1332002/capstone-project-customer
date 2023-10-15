import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
    id: number;
    name: string;
    email: number;
};

export const exampleApi = createApi({
    reducerPath: "exampleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BACKEND_API,
        // config header with token before calling apis
        // headers: {
        //     "Content-Type": "application/json",
        //   },
        //   prepareHeaders: (headers, { getState }) => {
        //     const token = selectToken(getState());
        //     if (token) {
        //       headers.set("authorization", `Bearer ${token}`);
        //     }
        //     return headers;
        //   },
    }),
    tagTypes: ['Account', 'Meal'],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], null>({
            query: () => "users",
            providesTags: ["Account"] //caching data
        }),
        getUserById: builder.query<User, { id: string }>({
            query: ({ id }) => `users/${id}`,
            providesTags: ["Account"] //caching data
        }),
        mealSelections: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `${id}/meal-selections`,
                method: "PUT",
                body: {
                    ...rest,
                    isFavourite: false,
                },
                invalidatesTags: ["Meal"], //renew data
            }),
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useMealSelectionsMutation, } = exampleApi;
