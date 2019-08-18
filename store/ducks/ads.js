// ==> TYPES
export const Types = {
  SET_REQUEST = 'ads/SET_REQUEST',
  ADD_REQUEST = 'ads/ADD_REQUEST',
  REMOVE_REQUEST = 'ads/REMOVE_REQUEST',
  UPDATE_REQUEST = 'ads/UPDATE_REQUEST'
} 

// ==> REDUCERS

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case Types.SET_REQUEST:
      return {
        ...state,
        loading: true
      }
    case Types.SET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, ...action.payload.data]
      }
    case Types.SET_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        }
    default:
      return state;
  }
} 

// ==> ACTIONS
