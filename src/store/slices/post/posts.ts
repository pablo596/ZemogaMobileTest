import {createSlice, current} from '@reduxjs/toolkit';
import {Post} from '../../../interfaces/Post';

export const postsSlice = createSlice({
  name: 'postsR',
  initialState: {
    postsR: [] as Post[],
    reload: false,
  },
  reducers: {
    setPosts: (state, action) => {
      // current(state).postsR = action.payload.posts;
      // state.postsR =
      for (let i = 0; i < action.payload.posts.length; i++) {
        state.postsR[i] = action.payload.posts[i];
      }
      // action.payload.posts.forEach((post: Post) => {
      //   state.postsR.push(post);
      // });
    },
    setFavorite: (state, action) => {
      state.postsR = current(state).postsR.map(post =>
        post.id === action.payload.id
          ? {...post, favorite: action.payload.favorite}
          : post,
      );
    },
    reloadPosts: state => {
      state.reload = !current(state).reload;
    },
    removeNotFavoritesPosts: state => {
      state.postsR = current(state).postsR.filter(
        post => post.favorite !== false,
      );
      state.postsR = current(state).postsR.map(
        post => {
          return {...post, favorite: true};
        },
        // post.id === action.payload.id
        //   ? {...post, favorite: action.payload.favorite}
        //   : post,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {setFavorite, setPosts, removeNotFavoritesPosts, reloadPosts} =
  postsSlice.actions;
