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
import {useGetCommentsQuery, useGetUserQuery} from '../store/apis/postApi';

interface Props extends StackScreenProps<RootStackParams, 'PostDetails'> {}

const PostDetails = ({route}: Props) => {
  const {post} = route.params;
  const {bottom} = useSafeAreaInsets();
  const {data: author = {}} = useGetUserQuery(post.id);
  const {data: comments = {}} = useGetCommentsQuery(post.id);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <ScrollView>
      <View style={{...styles.postContainer, marginBottom: bottom}}>
        <View style={styles.postTitleContainer}>
          <Text style={styles.postTitle}>{post?.title}</Text>
          <TouchableOpacity
            style={styles.postTitleAction}
            onPress={() => setIsFavorite(!isFavorite)}>
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
});
