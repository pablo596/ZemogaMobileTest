import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/MainNavigator';
import Divider from '../components/Divider';
import Accordion from '../components/Accordion';
import AuthorDetailComponent from '../components/AuthorDetailComponent';
import CommentsDetailComponent from '../components/CommentsDetailComponent';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {size} from '../theme';
import {
  useDeletePostMutation,
  useGetCommentsQuery,
  useGetUserQuery,
} from '../store/apis/postApi';
import {setFavorite} from '../store/slices/post';
import {useDispatch} from 'react-redux';

interface Props extends StackScreenProps<RootStackParams, 'PostDetails'> {}

const PostDetails = ({route}: Props) => {
  const {post} = route.params;
  const {bottom, top} = useSafeAreaInsets();
  const {data: author = {}} = useGetUserQuery(post.id);
  const [deletePost, {isLoading: isDeleting}] = useDeletePostMutation();
  const {data: comments = {}} = useGetCommentsQuery(post.id);
  const [isFavorite, setIsFavorite] = useState(post.favorite);
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View style={{...styles.postContainer, marginBottom: bottom, top: top}}>
        <View style={styles.postTitleContainer}>
          <Text style={styles.postTitle}>
            <Text style={{fontWeight: 'bold'}}>{post.id}.</Text> {post?.title}
          </Text>
          <TouchableOpacity
            style={styles.postTitleAction}
            onPress={() => {
              const fav = !isFavorite;
              dispatch(setFavorite({id: post.id, favorite: fav}));
              setIsFavorite(fav);
            }}>
            <AntDesign
              name={isFavorite ? 'star' : 'staro'}
              size={size.height * 0.07}
              color={'#FFCD3C'}
            />
          </TouchableOpacity>
        </View>
        <Divider />
        <Text style={styles.postDescription}>{post?.body}</Text>
        <Divider />
        <Accordion
          data={<AuthorDetailComponent author={author} />}
          title={'Author'}
        />
        <Divider />
        <Accordion
          data={<CommentsDetailComponent comments={comments} />}
          title={'Comments'}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => deletePost({id: post.id})}>
          <Text style={styles.buttonLabel}>Delete Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  postContainer: {
    marginHorizontal: 10,
  },
  postTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    width: size.width * 0.8,
  },
  postTitleAction: {},
  postDescription: {
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#e63946',
    marginTop: 10,
    borderRadius: 7,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {color: '#fff', fontSize: 20, fontWeight: 'bold'},
});
