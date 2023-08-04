import SidebarView from './Views/SidebarView'
import MainContentView from './Views/MainContentView'
import { Route, Routes } from 'react-router-dom'
import BottomMenuView from './Views/BottomMenuView'

function App() {
  return (
    <>
      {/* <div className="w-screen h-screen flex justify-center font-ubuntu bg-cover bg-center bg-slate-300 shadow-xl"> */}
      <div className="w-screen h-screen flex justify-center items-stretch bg-cover bg-center bg-slate-300 shadow-xl relative overflow-hidden">
        <div className='text-black flex flex-col items-center mx-0 2xl:mx-16 my-0 2xl:my-5 desktop:mx-60 2xl:rounded-2xl shadow-xl w-full overflow-hidden'>
          <div className='flex w-full h-full '>
            <SidebarView />
            <div className={`bg-slate-100 h-full w-full flex flex-col z-0 2xl:rounded-r-2xl`} >
              <Routes>
                <Route path='/' element={<MainContentView list={'today'} title={'Today'} />} />
                <Route path='/today' element={<MainContentView list={'today'} title={'Today'} />} />
                <Route path='/upcoming' element={<MainContentView list={'upcoming'} title={'Upcoming'} />} />
                <Route path='/someday' element={<MainContentView list={'someday'} title={'Someday'} />} />
              </Routes>
            </div>
          </div>
          <BottomMenuView />
        </div>
      </div>
    </>
  )
}

export default App
