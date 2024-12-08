import { Transactions } from "./transaction.interface";

// Action Types
export const FETCH_DATA_TRANSACTIONS_REQUEST = 'FETCH_DATA_TRANSACTIONS_REQUEST';
export const FETCH_DATA_TRANSACTIONS_SUCCESS = 'FETCH_DATA_TRANSACTIONS_SUCCESS';
export const FETCH_DATA_TRANSACTIONS_FAILURE = 'FETCH_DATA_TRANSACTIONS_FAILURE';
export const UPDATE_SORTED_TRANSACTIONS_DATA = 'UPDATE_SORTED_TRANSACTIONS_DATA';

// Action Creators Interfaces
interface FetchDataRequestAction {
  type: typeof FETCH_DATA_TRANSACTIONS_REQUEST;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_TRANSACTIONS_SUCCESS;
  payload: Transactions[];
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_TRANSACTIONS_FAILURE;
  payload: string;
}

interface UpdateSortedDataAction {
  type: typeof UPDATE_SORTED_TRANSACTIONS_DATA;
  payload: Transactions[];
}

export type TransactionsActionTypes = FetchDataRequestAction | FetchDataSuccessAction | FetchDataFailureAction | UpdateSortedDataAction;

// State Type
export interface TransactionsState {
  loading: boolean;
  data: Transactions[];
  error: string;
}

export interface ApplicationState {
  transactions: TransactionsState;
}
