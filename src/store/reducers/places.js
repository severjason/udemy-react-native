import {
  ADD_PLACE,
  DESELECT_PLACE,
  SELECT_PLACE,
  DELETE_PLACE
} from '../actions/types';
import uuid from "uuid";


const INITIAL_STATE = {
  places: [],
  selectedPlace: null,
};


const placesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLACE: {
      return {
        ...state,
        places: state.places.concat({
          key: uuid.v4(),
          name: action.payload.placeName,
          image: {
            uri: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350",
          }
        })
      }
    }
    case DELETE_PLACE: {
      return {
        ...state,
        places: state.places.filter(place => place.key !== state.selectedPlace.key),
        selectedPlace: null,
      }
    }
    case SELECT_PLACE: {
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.payload.key),
      }
    }
    case DESELECT_PLACE: {
      return {
        ...state,
        selectedPlace: null,
      }
    }
    default: {
      return state;
    }
  }
};

export default placesReducer;