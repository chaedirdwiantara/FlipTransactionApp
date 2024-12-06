import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../interface/redux.interface';
import {fetchDataRequest} from '../redux/actions/home';
import store from '../redux/store';
import { Gap, SearchBar } from '../components/atom';
import { mvs } from 'react-native-size-matters';
import { EmptyState } from '../components/molecule';
import ListTransactionCard from '../components/molecule/ListCard/ListTransactionCard';
import { Transactions } from '../interface/transaction.interface';
import { RootStackParams } from '../navigations';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeScreen = ({navigation}: {navigation: NativeStackNavigationProp<RootStackParams>}) => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const {data, loading, error} = useSelector(
    (state: ApplicationState) => state.home,
  );

  const [searchState, setSearchState] = useState('');

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const transactionIds = Object.values(data) as Transactions[];

  const onPress = ({item}: {item: Transactions}) => {
    console.log(item);
    navigation.navigate('DetailTransaction', {item});
  }

  
  return (
    <SafeAreaView style={styles.root}>
    <>
      <View style={styles.bodyContainer}>
        <SearchBar
          value={searchState}
          onChangeText={(newText: string) => setSearchState(newText)}
          rightIcon={searchState !== '' && true}
          reset={() => setSearchState('')}
        />
        <Gap height={20} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={transactionIds}
          renderItem={({item}) => (
            <ListTransactionCard item={item} onPress={onPress} />
          )}
          ListEmptyComponent={<EmptyState text="No data found" />}
        />
      </View>
    </>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.Neutral[20],
  },
  bodyContainer: {
    flex: 1,
    padding: widthResponsive(20),
    paddingHorizontal: widthResponsive(10),
  },
  filterContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    marginRight: widthResponsive(20),
  },
  filterStyle: {
    aspectRatio: undefined,
    width: widthResponsive(125),
    height: widthResponsive(30),
  },
  text: {
    color: color.Dark[50],
    fontSize: mvs(15),
    fontFamily: 'Inter-Medium',
  },
});
