import React, { FC, useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { profileData } from '../redux/auth/operations';
import {
  fetchImages,
  fetchOnRefresh,
} from '../redux/main/operations';
import {
  getImages,
  getState,
} from '../redux/main/selectors';
import styles from './styles/styles';

const Main: FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const images = useSelector(getImages);
  const state = useSelector(getState);

  useEffect(() => {
    setPage(page + 1);
    dispatch(fetchImages(page));
    setIsFetching(false);
    console.log(state);
    dispatch(profileData());
  }, []);

  const renderItems = ({ item }): JSX.Element => (
    <View key={item.id}>
      <Image
        style={styles.image}
        source={{
          uri: item.download_url,
        }}
      />

      <Text>{item.author}</Text>
    </View>
  );

  const handleRenderMore = () => {
    setPage(page + 1);

    dispatch(fetchImages(page));

    setIsFetching(false);
  };

  const handleRefresh = () => {
    setIsFetching(true);
    setPage(page + 1);

    dispatch(fetchOnRefresh(page));
    setIsFetching(false);
  };

  return (
    <View style={styles.container}>
      {!!images.length && (
        <FlatList
          data={images}
          renderItem={renderItems}
          onEndReached={handleRenderMore}
          onRefresh={handleRefresh}
          refreshing={isFetching}
        />
      )}
    </View>
  );
};

export default Main;
