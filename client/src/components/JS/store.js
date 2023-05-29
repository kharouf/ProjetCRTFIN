import { configureStore } from '@reduxjs/toolkit'

import userSlice from './userSlice/userSlice'
import benevoleSlice from './benevoleSlice/benevoleSlice'
import eventSlice from './evenementSlice/eventSlice'
import familles from './familles/familles'



export const store = configureStore({
  
  reducer: {
    user:userSlice,
    benevole:benevoleSlice,
    evenement:eventSlice,
    familles:familles,
    
  }
})