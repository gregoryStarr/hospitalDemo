import React, {useEffect, useState, useContext} from 'react'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from 'components/layouts/AppLayout';


type Props = {}


export const App = (props: Props) => {
  return (
    <Router>
        <AppLayout />
    </Router>
  )
}