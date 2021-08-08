import React from "react"
let UserContext = React.createContext({});
export let Provider = UserContext.Provider
export let Consumer = UserContext.Consumer
export default UserContext;
