import {useState, useEffect} from 'react';
import {JSONApi} from '../api/index';
import {Post} from '../interfaces/Post';

export const usePost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([] as Post[]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const resp = await JSONApi.get<Post[]>(
          'https://jsonplaceholder.typicode.com/posts/',
        );

        setIsLoading(false);

        setPosts(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadPosts();
  }, []);

  return {
    isLoading,
    posts,
  };
};
