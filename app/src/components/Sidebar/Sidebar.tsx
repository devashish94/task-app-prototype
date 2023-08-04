import FirstBlock from './FirstBlock'
import LastBlock from './LastBlock'
import PinnedCollapseText from './PinnedCollapseText'
import CloseSidebarButton from './CloseSidebarButton'

function Sidebar() {
  return (
    <>
      <div className="bg-slate-100 h-full w-full max-w-full large:w-80 py-4 px-4  rounded-r-3xl large:rounded-none 2xl:rounded-l-2xl">
        <div className='flex flex-col justify-between w-full h-full'>
          <div className="split-display:hidden self-end">
            <CloseSidebarButton />
          </div>
          <div className='h-full flex flex-col justify-between overflow-auto'>
            <div className="flex flex-col py-2 mb-4 justify-start">
              <FirstBlock />
              <PinnedCollapseText />
            </div>
            <LastBlock />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar 
