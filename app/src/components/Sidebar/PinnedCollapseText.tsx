import PinnedTaskList from './PinnedTaskList'
import pinnedData from '../../data'
import DownArrow from '../../svg-components/DownArrowLogo'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { collapse } from '../../store/slices/pinnedCollapseSlice'
import { useEffect, useState } from "react";
import { fetchAllList, fetchTaskList, nullTheArray } from '../../store/slices/taskSlice'
import Loader from '../../svg-components/Loader'

function PinnedCollapse() {
  const visible = useAppSelector(state => state.pinnedCollapse)
  const dispatch = useAppDispatch()

  const { tasks, loading } = useAppSelector(state => state.tasks)

  const [pinned, setPinned] = useState([] as any)

  useEffect(() => {
    console.clear()
    dispatch(fetchAllList())
    if (!loading) {
      setPinned(tasks)
      console.log(tasks)
    }
  }, [])

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
          loading ? <Loader /> : tasks && tasks.length > 0 ?
            tasks
              .filter((task: any) => {
                return task.pin === 1
              })
              .map((task: any, idx: number) => {
                return (
                  <PinnedTaskList key={idx} list={task} />
                );
              }) : ''
        }
      </div>
    </div>
  );
}

export default PinnedCollapse;
