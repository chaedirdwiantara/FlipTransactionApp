import { FETCH_DATA_TRANSACTIONS_FAILURE, FETCH_DATA_TRANSACTIONS_REQUEST, FETCH_DATA_TRANSACTIONS_SUCCESS, TransactionsActionTypes, TransactionsState, UPDATE_SORTED_TRANSACTIONS_DATA } from "../../interface/redux.interface";

const initialState: TransactionsState = {
  loading: false,
  data: [],
  error: '',
};

const homeReducer = (state = initialState, action: TransactionsActionTypes): TransactionsState => {
  switch (action.type) {
    case FETCH_DATA_TRANSACTIONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_TRANSACTIONS_SUCCESS:
      return { loading: false, data: action.payload, error: '' };
    case FETCH_DATA_TRANSACTIONS_FAILURE:
      return { loading: false, data: [], error: action.payload };
    case UPDATE_SORTED_TRANSACTIONS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
