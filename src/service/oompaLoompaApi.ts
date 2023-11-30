import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CACHE_TIME = 24 * 60 * 60; // 24 hours in seconds

export interface OompaLoompaListResponse {
    current: number;
    total: number;
    results: OompaLoompaOnList[];
}

export interface BaseOompaLoompa {
    first_name: string;
    last_name: string;
    favorite: Favorite;
    gender: string;
    image: string;
    profession: string;
    email: string;
    age: number;
    country: string;
    height: number;
}

export interface OompaLoompaOnList extends BaseOompaLoompa {
    id: number;
}

export interface OompaLoompaOnDetail extends BaseOompaLoompa {
    description: string;
    quota: string;
}

export interface Favorite {
    color: string;
    food: string;
    random_string: string;
    song: string;
}

export const oompaLoompaApi = createApi({
    reducerPath: "oompaLoompaApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/",
    }),
    keepUnusedDataFor: CACHE_TIME,
    tagTypes: ["OompaLoompa"],
    endpoints: (builder) => ({
        getOompaLoompas: builder.query<OompaLoompaListResponse, number>({
            query: (page: number) => `?page=${page}`,
            providesTags: ["OompaLoompa"],
        }),
        getOompaLoompa: builder.query<OompaLoompaOnDetail, string>({
            query: (id: string) => `${id}`,
        }),
    }),
});

export const { useGetOompaLoompasQuery, useGetOompaLoompaQuery } = oompaLoompaApi;
