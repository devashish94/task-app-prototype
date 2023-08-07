import PinnedTaskList from './PinnedTaskList'
import DownArrow from '../../svg-components/DownArrowLogo'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { collapse } from '../../store/slices/pinnedCollapseSlice'
import { useEffect, useState } from "react";
import { fetchAllList } from '../../store/slices/listSlice'
import Loader from '../../svg-components/Loader'

function PinnedCollapse() {
  const visible = useAppSelector(state => state.pinnedCollapse)
  const dispatch = useAppDispatch()

  const lists = useAppSelector(state => state.lists.lists)
  const loading = useAppSelector(state => state.tasks.loading)
  const count = 1;

  useEffect(() => {
    // console.clear()
    console.log('pinnedlists')
    dispatch(fetchAllList())
  }, [count])

  return (
    <div className={`flex flex-col mt-8 rounded-lg duration-200 ${visible ? 'bg-slate-200' : 'bg-slate-100'}`}>
      <div className={`font-bold flex justify-between mb-1 px-2 py-2 hover:cursor-pointer rounded-md ${visible ? 'hover:bg-slate-300' : 'hover:bg-slate-200'} `}
        onClick={() => dispatch(collapse())}>
        <div className="">Pinned</div>
        <div className="flex items-center">
          <div className={`will-change-transform transform-gpu duration-[400ms] ease-in-out transition-all delay-0 ${visible ? 'rotate-0' : '-rotate-180'}`}>
            <DownArrow />
          </div>
        </div>
      </div>
      <div className={`will-change-transform overflow-hidden transition-all duration-[400ms] ease-in-out transform-gpu py-0 ${visible ? 'max-h-64' : 'max-h-0'}`}>
        {
          loading ? <Loader /> : lists && lists.length > 0 ?
            lists
              .filter((task: any) => {
                return task.pin === 1
              })
              .map((task: any, idx: number) => {
                return (
                  <PinnedTaskList key={idx} list={task} />
                );
              }) : 'This area is not loading'
        }
      </div>
    </div>
  );
}

export default PinnedCollapse;
