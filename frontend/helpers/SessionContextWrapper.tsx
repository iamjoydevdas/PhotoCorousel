import React, { useState } from "react";
import { SessionContext } from "../lib/SessonContext";
import { IRegisterResponse, IResposeData } from "../models/response";
import { UserDto } from "../models/user/Users";

type Props = {
    children: any;
    enabledFeatures?: string;
}

export interface Session {
    loggedInUser?: UserDto;
    isLoggedIn: boolean;
 }
 
 const initSession: Session = {
     loggedInUser: {
             jwt:'',
             user: {
                 email: '',username:'',  id:'', usertype: 'C'
             }
     },
     isLoggedIn:false
 }

export const SessionManager = ({ children }: Props) => {
    const [session, setSession] = useState<Session>(initSession);

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    )
}

