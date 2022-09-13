
import { RepoItem, Users } from "../../../utils";
import { DataP } from "./GithubActions";

export type Action = {
  type: String,
  payload: [];
  payloadUser: {};

}
export type Act = {
    type:string;
    payload: {};
}

export enum ActionType {
    Get_Users,
    Get_User,
    Get_Repo,
    Clear_User,
    set_Loading
}

export interface Get_Users{
    type: ActionType.Get_Users;
    payload: [];
}

export interface Get_User{
    type: ActionType.Get_User;
    payload: DataP
}

export interface Get_Repo{
    type: ActionType.Get_Repo;
    payload: RepoItem[]
}
export interface Clear_User{
    type: ActionType.Clear_User;
    payload:[]
}

export interface set_Loading{
    type:ActionType.set_Loading
}

export type Actions = Get_Users | Get_User | Get_Repo | Clear_User | set_Loading;





const githubReducer = (state: Users, action:Actions) => {
  switch(action.type){
      case ActionType.Get_Users:
          return {
              ...state,
              users: action.payload,
              loading:false,
          }
      case ActionType.Get_User:
          return {
              ...state,
              user: action.payload,
              loading:false,
          }
      case ActionType.Get_Repo:
          return {
              ...state,
              repos: action.payload,
          }
      case ActionType.set_Loading:
          return{
              ...state,
              laoding:true,
          }
      case ActionType.Clear_User:
          return{
              ...state,
              users: action.payload,
          }
      default:
          return state
  }
}


export default githubReducer