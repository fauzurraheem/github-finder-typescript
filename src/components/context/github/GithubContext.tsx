import React, { createContext, useReducer } from "react";
import { Users } from "../../../utils";
import githubReducer, { Actions } from "./GithubReducer";


type Props = {
  children : React.ReactNode
}

const initialState: Users= {
  users:[],
  user: {
  name:'',
  type:'',
  avatar_url:'',
  location:'',
  bio:'',
  blog:'',
  twitter_username: null,
  login:'',
  html_url:'',
  followers:0,
  following:0,
  public_repos:'',
  public_gists: 0,
  hireable:null
  },
  repos:[],
  loading: false,
 
}





export const GithubContext = createContext<{state: Users; dispatch:React.Dispatch<Actions>}>({state: initialState,
  dispatch: () => null
})


export const GithubContextProvider = ({children}: Props) => {
  

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider value={{ state, dispatch}}>
      {children}
    </GithubContext.Provider>
  )
}

 


