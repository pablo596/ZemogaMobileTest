import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Post} from '../../interfaces/Post';
export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
      transformResponse: (response: Post[]) => {
        console.log(response);

        return response.map(post => {
          return {...post, favorite: false};
        });
      },
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
    deletePost: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({id}) => {
        console.log(id);

        return {
          url: `/posts/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const getThings = (state: any) =>
  postApi.endpoints.getPost.select({})(state)?.data ?? {};

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetUserQuery,
  useGetCommentsQuery,
  useDeletePostMutation,
} = postApi;
