export enum UserActionTypes {
  CREATE_USER = "CREATE_USER",
  UPDATE_USER = "UPDATE_USER",
  GET_USER = "GET_USER",
  DELETE_USER = "DELETE_USER",
}

export type UserAction = CreateUser | UpdateUser | DeleteUser

export type UserID = string | number;

export interface User {
  id: string | number;
  name: string;
  job: string;
  height: number;
  weight: number;
  createDate: number;
}
export interface CreateUser {
  type: UserActionTypes.CREATE_USER;
  user: User;
}

export function createUser(newUser: User): CreateUser {
  return {
    type: UserActionTypes.CREATE_USER,
    user: newUser,
  };
}
export interface UpdateUser {
  type: UserActionTypes.UPDATE_USER;
  updateUser: User;
}

export function updateUser(updateUser: User, id: UserID): UpdateUser {
  return {
    type: UserActionTypes.UPDATE_USER,
    updateUser,
  };
}
export interface DeleteUser {
  type: UserActionTypes.DELETE_USER;
  id: UserID;
}

export function deleteUser(id: UserID): DeleteUser {
  return {
    type: UserActionTypes.DELETE_USER,
    id,
  };
}
