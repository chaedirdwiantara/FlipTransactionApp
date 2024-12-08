import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../theme';
import {filterTransactionsBySearch, widthResponsive} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../interface/redux.interface';
import {fetchDataRequest} from '../redux/actions/transactions.action';
import store from '../redux/store';
import {Gap, LoadingIndicator} from '../components/atom';
import {mvs} from 'react-native-size-matters';
import {EmptyState, FilterModal, SearchBar} from '../components/molecule';
import ListTransactionCard from '../components/molecule/ListCard/ListTransactionCard';
import {Transactions} from '../interface/transaction.interface';
import {RootStackParams} from '../navigations';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {dataFilter} from '../data/dataFilter';
import useFilter from '../hooks/useFilter';

const ITEM_HEIGHT = widthResponsive(100);

const ListTransactionScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParams>;
}) => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const {data, loading, error} = useSelector(
    (state: ApplicationState) => state.transactions,
  );

  const [searchState, setSearchState] = useState('');
  const [searchFilteredData, setSearchFilteredData] = useState<Transactions[]>(
    [],
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('URUTKAN');

  const transactionIds = Object.values(data) as Transactions[];

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  useEffect(() => {
    const filteredData = filterTransactionsBySearch(
      transactionIds,
      searchState,
    );
    setSearchFilteredData(filteredData);
  }, [searchState]);

  useFilter(transactionIds, selectedFilter);

  const onPress = ({item}: {item: Transactions}) => {
    navigation.navigate('DetailTransactionScreen', {item});
  };

  const filterBtnOnPress = () => {
    setModalIsOpen(true);
  };

  const handleSetFilter = (label: string) => {
    setSelectedFilter(label);
  };

  return (
    <SafeAreaView style={styles.root}>
      <>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <View style={styles.bodyContainer}>
            <SearchBar
              value={searchState}
              onChangeText={(newText: string) => setSearchState(newText)}
              filterBtnOnPress={filterBtnOnPress}
              placeholder="Cari nama, bank, atau nominal"
              selectedFilter={selectedFilter}
            />
            <Gap height={10} />
            {error ? (
              <EmptyState
                text="Gagal memuat data"
                containerStyle={{marginTop: mvs(200)}}
              />
            ) : (
              <FlatList
                keyExtractor={item => item.id.toString()}
                initialNumToRender={10}
                getItemLayout={(data, index) => ({
                  length: ITEM_HEIGHT,
                  offset: ITEM_HEIGHT * index,
                  index,
                })}
                showsVerticalScrollIndicator={false}
                data={searchState ? searchFilteredData : transactionIds}
                renderItem={({item}) => (
                  <ListTransactionCard item={item} onPress={onPress} />
                )}
                ListEmptyComponent={
                  <EmptyState
                    text="Tidak ada data ditemukan"
                    containerStyle={{marginTop: mvs(200)}}
                  />
                }
              />
            )}
          </View>
        )}
        <FilterModal
          modalVisible={modalIsOpen}
          toggleModal={() => setModalIsOpen(false)}
          dataFilter={dataFilter}
          setFilter={handleSetFilter}
          selectedFilter={selectedFilter}
        />
      </>
    </SafeAreaView>
  );
};

export default ListTransactionScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.Neutral[20],
  },
  bodyContainer: {
    flex: 1,
    padding: widthResponsive(20),
    paddingHorizontal: widthResponsive(6),
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
