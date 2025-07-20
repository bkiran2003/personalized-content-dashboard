import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
  reducerPath: 'myApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
  endpoints: (builder) => ({
    getItems: builder.query<any[], void>({
      query: () => '/items',
    }),
    // Add more endpoints here
  }),
});

export const { useGetItemsQuery } = myApi;
