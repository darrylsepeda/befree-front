// ==> TYPES
export const Types = {
  SET_REQUEST = 'ads/SET_REQUEST',
  SET_SUCCESS = 'ads/SET_SUCCESS',
  SET_FAILURE = 'ads/SET_FAILURE',

  ADD_REQUEST = 'ads/ADD_REQUEST',
  ADD_SUCCESS = 'ads/ADD_SUCCESS',
  ADD_FAILURE = 'ads/ADD_FAILURE ',

  REMOVE_REQUEST = 'ads/REMOVE_REQUEST',
  REMOVE_SUCCESS = 'ads/REMOVE_SUCCESS',
  REMOVE_FAILURE = 'ads/REMOVE_FAILURE',

  UPDATE_REQUEST = 'ads/UPDATE_REQUEST',
  UPDATE_SUCCESS = 'ads/UPDATE_SUCCESS',
  UPDATE_FAILURE = 'ads/UPDATE_FAILURE',

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

// ==> ACTION CREATORS

export const Creators = {

  // SETTING - FETCHING
  setAdsRequest = () => ({
    type: Types.SET_REQUEST
  }),

  setAdsSuccess = (data) => ({
    type: Types.SET_SUCCESS,
    payload: {
      data
    }
  }),

  setAdsFailure = (error) => ({
    type: Types.SET_FAILURE,
    payload: {
      error
    }
  }),

  // REMOVING

  removeAdsRequest = () => ({
    type: Types.REMOVE_REQUEST
  }),

  removeAdsSuccess = (data) => ({
    type: Types.REMOVE_SUCCESS,
    payload: {
      data
    }
  }),

  removeAdsFailure = (error) => ({
    type: Types.REMOVE_REQUEST,
    payload: {
      error
    }
  }),

  // UPDATING

  updateAdsRequest = () => ({
    type: Types.UPDATE_REQUEST
  }),

  updateAdsSuccess = () => ({
    type: Types.UPDATE_SUCCESS
  }),

  updateAdsFailure = () => ({
    type: Types.UPDATE_FAILURE
  })
}