import React from "react";
import { Session } from "../helpers/SessionContextWrapper";

type ISessionContext = [Session, React.Dispatch<React.SetStateAction<Session>>];

export const SessionContext = React.createContext<ISessionContext>([{isLoggedIn:false}, () => null]);