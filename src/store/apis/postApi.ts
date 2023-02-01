import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    getPost: builder.query({
      query: postID => `/posts/${postID}`,
    }),
    getUser: builder.query({
      query: userID => `/users/${userID}`,
    }),
    getComments: builder.query({
      query: postID => `/posts/${postID}/comments`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetUserQuery,
  useGetCommentsQuery,
} = postApi;
