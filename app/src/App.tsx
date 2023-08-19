import SidebarView from './Views/SidebarView'
import MainContentView from './Views/MainContentView'
import { Route, Routes, useLocation } from 'react-router-dom'
import BottomMenuView from './Views/BottomMenuView'

function App() {
  const path = useLocation().pathname
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-stretch bg-cover bg-center bg-slate-300 shadow-xl relative overflow-hidden">
        <div className='text-black flex flex-col items-center mx-0 2xl:mx-16 my-0 2xl:my-5 desktop:mx-60 2xl:rounded-2xl shadow-xl w-full overflow-hidden'>
          <BottomMenuView />
          <div className='flex w-full h-full '>
            <SidebarView />
            <div className={`bg-slate-100 h-full w-full flex flex-col z-0 2xl:rounded-r-2xl`} >
              {/* <Routes> */}
                {/* <Route path='/list/*' element={<MainContentView title={path.slice(1).split('/')[1]} />} /> */}
                {/* <Route path='/lists/*' element={<MainContentView title={'All Lists'} />} /> */}
                {/* <Route path='/AllLists' element={<MainContentView title={'All Lists'} />} /> */}
                {/* <Route path='/*' element={<MainContentView title={'Today'} />} /> */}
              {/* </Routes> */}
              <MainContentView />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
