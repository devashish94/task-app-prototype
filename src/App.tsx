import SidebarView from './Views/SidebarView'
import MainContentView from './Views/MainContentView'
import NavbarView from './Views/NavbarView'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center font-ubuntu bg-cover bg-center bg-slate-300 shadow-xl">
        <div className='text-black flex w-full justify-stretch mx-0 2xl:mx-16 my-0 2xl:my-5 desktop:mx-60 2xl:rounded-xl shadow-xl'>
          <SidebarView />
          <div className={`h-full w-full flex flex-col z-0`} >
            <NavbarView />
            <Routes>
              <Route path='/' element={<MainContentView title={'Today'} />} />
              <Route path='/today' element={<MainContentView title={'Today'} />} />
              <Route path='/upcoming' element={<MainContentView title={'Upcoming'} />} />
              <Route path='/someday' element={<MainContentView title={'Someday'} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
