import { UPDATE_RESUME_DATA } from '../actions/types'
import { act } from 'react-dom/test-utils';

const initialState = {
  template: "basic",
  profile: {
    photo: "",
    name: "",
    title: "",
    address1:"",
    address2:"",
    phone:"",
    email:"",
    website: ""
  },
  objective: {
    heading: "Objective",
    description: ""
  },
  skills: {
    heading: "Skills",
    list: []
  },
  education: {
    heading: "Education",
    list: []
  },
  experience: {
    heading: "Work Experience",
    list: []
  },
  certificate: {
    heading: "Certifications",
    list: []
  }
}
const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_RESUME_DATA: {
        return { ...state, ...action.payload};
      }
      default:
        return state
    }
  }
  
  export default resumeReducer