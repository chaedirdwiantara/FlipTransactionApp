import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Transactions} from '../interface/transaction.interface';
import {updateSortedData} from '../redux/actions/transactions.action';
import store from '../redux/store';

const useFilter = (data: Transactions[], selectedFilter: string) => {
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    if (!data) return;

    let sortedData = [...data];
    switch (selectedFilter) {
      case 'Nama A-Z':
        sortedData.sort((a, b) =>
          a.beneficiary_name?.toString().localeCompare(b.beneficiary_name?.toString()),
        );
        break;
      case 'Nama Z-A':
        sortedData.sort((a, b) =>
          b.beneficiary_name?.toString().localeCompare(a.beneficiary_name?.toString()),
        );
        break;
      case 'Tanggal Terbaru':
        sortedData.sort(
          (a, b) =>
            new Date(b.created_at.toString()).getTime() -
            new Date(a.created_at.toString()).getTime(),
        );
        break;
      case 'Tanggal Terlama':
        sortedData.sort(
          (a, b) =>
            new Date(a.created_at.toString()).getTime() -
            new Date(b.created_at.toString()).getTime(),
        );
        break;
      default:
        sortedData = data;
    }

    dispatch(updateSortedData(sortedData));
  }, [selectedFilter]);
};

export default useFilter;