import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../interface/redux.interface';
import {fetchDataRequest} from '../redux/actions/home';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(
    (state: ApplicationState) => state.home,
  );

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  // Render your UI based on the state
  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
    padding: widthResponsive(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
