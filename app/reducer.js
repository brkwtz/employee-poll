import axios from 'axios'

//---------REDUCER-------//
const initialState = {
  questions: [],
  managers: {},
  mood: 1,
  submitted: false
};

export default function pollPage(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch(action.type) {

    case GET_FORM_DATA:
      newState.questions = action.questions;
      newState.managers = action.managers;
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


//---------ACTION CREATORS-------//
export const getFormData = (questions, managers) => {
  console.log('hitting getFormData')
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


//---------THUNKS-------//
export const loadForm = () => {
  console.log('calling loadForm')
  return dispatch => {
    axios.get('/api/demo-question')
    .then(res => res.data)
    .then(data => {
      console.log('getformdata')
      dispatch(getFormData(data.questions, data.managers));
    })
    .catch();
  };
};
