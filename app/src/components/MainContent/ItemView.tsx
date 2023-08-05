import { useLocation } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import Tasks from "./Tasks";
import AllLists from '../MainContent/AllLists'

export default function TaskContent() {
  const location = useLocation().pathname

  return (
    <>
      <Routes>
        <Route path='/*' element={<Tasks path={location} />} />
        <Route path='/all' element={<AllLists path={location} />} />
      </Routes>
    </>
  )
}
