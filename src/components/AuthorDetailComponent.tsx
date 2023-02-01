import {View} from 'react-native';
import React from 'react';
import {Author} from '../interfaces/Author';
import Item from './Item';
import {verticalItemsGap} from '../theme/index';

interface Props {
  author: Author;
}
const AuthorDetailComponent = ({author}: Props) => {
  return (
    <View style={verticalItemsGap.container}>
      <Item
        label={'Author'}
        data={author.name}
        style={verticalItemsGap.child}
      />
      <Item
        label={'Username'}
        data={author.username}
        style={verticalItemsGap.child}
      />
      <Item
        label={'Email'}
        data={author.email}
        style={verticalItemsGap.child}
      />
      <Item
        label={'Phone'}
        data={author.phone}
        style={verticalItemsGap.child}
      />
      <Item
        label={'Website'}
        data={author.website}
        style={verticalItemsGap.child}
      />
      <Item
        label={'Company'}
        data={author.company.name}
        style={verticalItemsGap.child}
      />
      <Item
        label={'Address'}
        data={`${author.address.city}, ${author.address.street}`}
        style={verticalItemsGap.child}
      />
    </View>
  );
};

export default AuthorDetailComponent;
