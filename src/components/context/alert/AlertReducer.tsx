export enum Actions {
  Set_Alert,
  Remove_Alert,
}

export interface Set_Alert{
  type: Actions.Set_Alert
  payload: null
}

export interface Remove_Alert {
  type: Actions.Remove_Alert;
}

export type ActionsD = Remove_Alert | Set_Alert;

const alertReducer = (state:null, action: ActionsD) =>{
  switch(action.type){
      case Actions.Set_Alert:
          return action.payload
      case Actions.Remove_Alert:
          return null
      default:
          return state
  }
}

export default alertReducer