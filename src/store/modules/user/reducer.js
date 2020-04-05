import { produce } from "immer";

const initialState = {
  user: {
    id: null,
    email: "",
    cpf: "",
    password: ""
  }
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "@user/USER_CREATE":
      return produce(state, draft => {
        draft.user = action.user;
      });

    default:
      return state;
  }
}
