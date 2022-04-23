import '../styles/globals.css'
import './profiles/profiles.css'
import type { AppProps } from 'next/app'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../components/home/home';
import { SessionManager } from '../helpers/SessionContextWrapper';
import 'font-awesome/css/font-awesome.min.css';
import Notifications, {notify} from 'react-notify-toast';

function MyApp({ Component, pageProps }: AppProps) {

 
  return (
    <SessionManager>
      <Notifications />
      <HomePage>
        <Component {...pageProps} />
      </HomePage>
    </SessionManager>
  );
}

export default MyApp
