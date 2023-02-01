import {View} from 'react-native';
import React from 'react';
import Item from './Item';
import {verticalItemsGap} from '../theme';
import {Comment} from '../interfaces/Comment';

interface Props {
  comments: Comment[];
}

const CommentsDetailComponent = ({comments}: Props) => {
  return (
    <View style={verticalItemsGap.container}>
      {comments.map(c => (
        <Item label={c.email} data={c.body} style={verticalItemsGap.child} />
      ))}
    </View>
  );
};

export default CommentsDetailComponent;
