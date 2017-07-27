import axios from 'axios'

//---------REDUCER-------//
const initialState = {
  questions: [],
  managers: {},
  mood: 1,
  submitted: false,
  ratingResponse: '',
  ratingImageUrl: ''
};

export default function pollPage(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch(action.type) {

    case GET_FORM_DATA:
      newState.questions = action.questions;
      newState.managers = action.managers;
      break;

    case SET_MOOD:
      newState.mood = action.mood;
      newState.ratingResponse = action.ratingResponse;
      newState.ratingImageUrl = action.ratingImageUrl;
      break;

    default:
      newState = state;
      break;
  };

  return newState;
};


//---------CONSTANTS-------//

export const GET_FORM_DATA = "GET_FORM_DATA";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const SET_MOOD = "SET_MOOD";


//---------ACTION CREATORS-------//
export const getFormData = (questions, managers) => {
  return {
    type: GET_FORM_DATA,
    questions: questions,
    managers: managers
  };
};

export const submitForm = (questions) => ({
  type: SUBMIT_FORM,
  submitted: true
});

export const getAndSetMood = (mood, ratingResponseSegment, ratingImageUrlSegment) => ({
  type: SET_MOOD,
  mood: mood,
  ratingResponse: ratingResponseSegment + ' Thank you for your feedback.',
  ratingImageUrl: "/images/" + ratingImageUrlSegment + ".svg" 
});

//--------FUNCTIONS------//
export const setMoodAttributes = (mood) => {
  return dispatch => {
    let ratingImageUrlSegment;
    let ratingResponseSegment;

    if(mood === '5') {
      ratingImageUrlSegment = "VeryHappy"
      ratingResponseSegment = "Awesome!"
    } else if(mood === '4') {
      ratingImageUrlSegment = "Happy"
      ratingResponseSegment = "Great!"
    } else if(mood === '3') {
      ratingImageUrlSegment = "Neutral"
      ratingResponseSegment = "OK... things could be better."
    } else if(mood === '2') {
      ratingImageUrlSegment = "Unhappy"
      ratingResponseSegment = "Mmmmh, things should improve."
    } else if(mood === '1') {
      ratingImageUrlSegment = "VeryUnhappy"
      ratingResponseSegment = "Oops, something needs to change."
    } else {
      ratingImageUrlSegment = "Neutral"
      ratingResponseSegment = "OK... things could be better."
    }

    dispatch(getAndSetMood(mood, ratingResponseSegment, ratingImageUrlSegment))
  }
}

//---------THUNKS-------//
export const loadForm = () => {
  return dispatch => {
    axios.get('/api/demo-question')
    .then(res => res.data)
    .then(data => {
      dispatch(getFormData(data.questions, data.managers));
    })
    .catch();
  };
};
