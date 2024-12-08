import { FETCH_DATA_TRANSACTIONS_FAILURE, FETCH_DATA_TRANSACTIONS_REQUEST, FETCH_DATA_TRANSACTIONS_SUCCESS, TransactionsActionTypes, UPDATE_SORTED_TRANSACTIONS_DATA } from "../../interface/redux.interface";
import { Transactions } from "../../interface/transaction.interface";
export const fetchDataRequest = (): TransactionsActionTypes => ({
  type: FETCH_DATA_TRANSACTIONS_REQUEST,
});

export const fetchDataSuccess = (data: Transactions[]): TransactionsActionTypes => ({
  type: FETCH_DATA_TRANSACTIONS_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): TransactionsActionTypes => ({
  type: FETCH_DATA_TRANSACTIONS_FAILURE,
  payload: error,
});

export const updateSortedData = (sortedData: Transactions[]): TransactionsActionTypes => ({
  type: UPDATE_SORTED_TRANSACTIONS_DATA,
  payload: sortedData,
});
