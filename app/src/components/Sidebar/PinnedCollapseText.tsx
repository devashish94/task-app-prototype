import PinnedTaskList from './PinnedTaskList'
import pinnedData from '../../data'
import DownArrow from '../../svg-components/DownArrowLogo'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { collapse } from '../../store/slices/pinnedCollapseSlice'

function PinnedCollapse() {
  const visible = useAppSelector(state => state.pinnedCollapse)
  const dispatch = useAppDispatch()

  return (
    <div className={`flex flex-col mt-2 rounded-lg duration-200 ${visible ? 'bg-slate-200' : 'bg-slate-100'}`}>
      <div className={`font-bold flex justify-between mb-1 px-2 py-2 hover:cursor-pointer rounded-md ${visible ? 'hover:bg-slate-300' : 'hover:bg-slate-200'} `}
        onClick={() => dispatch(collapse())}>
        <div className="">Pinned</div>
        <div className="flex items-center">
          <div className={`will-change-transform transform-gpu duration-[400ms] ease-in-out transition-all delay-0 ${visible? 'rotate-0' : '-rotate-180'}` }>
            <DownArrow />
          </div>
        </div>
      </div>
      <div className={`will-change-transform overflow-hidden transition-all duration-[400ms] ease-in-out transform-gpu py-0 ${visible ? 'max-h-64' : 'max-h-0'}`}>
        {pinnedData.map((list, i) => <PinnedTaskList key={i} list={list} />)}
      </div>
    </div>
  );
}

export default PinnedCollapse;
