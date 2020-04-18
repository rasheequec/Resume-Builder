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
  }
}
const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state
    }
  }
  
  export default resumeReducer