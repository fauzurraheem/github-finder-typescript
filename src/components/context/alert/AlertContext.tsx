import { Children, createContext, useReducer } from "react"
import alertReducer, { ActionsD } from "./AlertReducer"

type Props = {
  children : React.ReactNode
}

const initialState = null

const AlertContext = createContext<{state:null; dispatch:React.Dispatch<ActionsD>}>({
  state:null,
  dispatch: () => null
})

export const AlertContextProvider = ({children}:Props) => {

  const [state, dispatch] = useReducer(alertReducer, initialState)


  return (
    <AlertContext.Provider value={{state, dispatch}} >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext