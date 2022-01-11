const SEND_FORM = 'SEND_FORM'

const initialState = {
  personsForms : {}
};


export default (state = initialState, action) => {
  switch(action.type) {
    case SEND_FORM: {
      return {
        ...state,
        personsForms: action.createNewForm
      }
    }
    default:
      return state
  }
}

export function addPersonForm(
  name,
  time,
  telephone,
  numberOfPeople,
  mail,
  comments
) {
  console.log(name, time, telephone, numberOfPeople, mail, comments);
  return (dispatch, getState) => {
    const allForms = getState().form_reducer.personsForms;
    const idForKey = Math.random()
      .toString(32)
      .substr(2, 12);
    return dispatch({
      type: SEND_FORM,
      createNewForm: {
        ...allForms,
        [idForKey]: {
          name,
          time,
          telephone,
          numberOfPeople,
          mail,
          comments,
        },
      },
    });
  };
}
