import { User, UserAction, UserActionTypes, } from "./action";

export interface UserInitialState {
  users: User[];
  user: User | null;
}

const initialState: UserInitialState = {
  users: [],
  user: null,
};

export default function UserReduser(state = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.CREATE_USER: {
      return { ...state, users: [...state.users, action.user] };
    }
    case UserActionTypes.UPDATE_USER: {
      return{}
    }
    case UserActionTypes.DELETE_USER : {
const newUsers = state.users.filter((user) => user.id !== action.id)

      return {...state, users:newUsers};
    }
    default:{
      return state
    }
  }
}
