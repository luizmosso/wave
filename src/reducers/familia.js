const FAMILIAS = "FAMILIAS";

const initialState = {
  familias: []
};

export default function familia(state = initialState, action) {
  switch (action.type) {

    case FAMILIAS:
      return {
        ...state,
        familias: action.familias
      };

    default:
      return state;
  }
}
