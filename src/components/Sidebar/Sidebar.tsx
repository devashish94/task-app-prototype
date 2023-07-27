import FirstBlock from './FirstBlock'
import LastBlock from './LastBlock'
import PinnedCollapseText from './PinnedCollapseText'
import CloseSidebarButton from './CloseSidebarButton'

function Sidebar() {
  return (
    <>
      <div className="bg-slate-100 h-full w-full max-w-full large:w-80 flex flex-col justify-between overflow-y-auto my-auto py-4 px-4 large:rounded-none 2xl:rounded-l-2xl">

        <div className="split-display:hidden self-end">
          <CloseSidebarButton /> 
        </div>
        <div className='h-full flex flex-col justify-between'>
          <div className="flex flex-col py-2 mb-4 justify-start">
            <FirstBlock />
            <PinnedCollapseText />
          </div>
          <LastBlock />
        </div>
      </div>
    </>
  );
}

export default Sidebar 
