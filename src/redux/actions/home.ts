import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, HomeActionTypes } from "../../interface/redux.interface";
import { Transactions } from "../../interface/transaction.interface";
export const fetchDataRequest = (): HomeActionTypes => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: Transactions[]): HomeActionTypes => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): HomeActionTypes => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
