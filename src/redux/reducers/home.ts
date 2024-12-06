import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, HomeActionTypes, HomeState } from "../../interface/redux.interface";

const initialState: HomeState = {
  loading: false,
  data: [],
  error: '',
};

const homeReducer = (state = initialState, action: HomeActionTypes): HomeState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { loading: false, data: action.payload, error: '' };
    case FETCH_DATA_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
