import { useLocation } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import Tasks from "./Tasks";
import AllLists from '../MainContent/AllLists'

export default function ItemView() {
  const location = useLocation().pathname

  return (
    <>
      <Routes>
        <Route path='/lists/All_List' element={<AllLists path={location} />} />
        <Route path='/list/:type' element={<Tasks path={location} />} />
      </Routes>
    </>
  )
}
