import { useAppSelector, useAppDispatch } from "../store/hooks";
import { toggleBottomMenu, toggleFullScreen as toggleFullscreen } from "../store/slices/bottomMenuSlice";
import ExpandLogo from "../svg-components/ExpandLogo";
import CloseLogo from '../svg-components/CloseLogo'
import NonExapandLogo from "../svg-components/NonExpandLogo";
import TaskDetail from "./MainContent/TaskDetail";

export default function BottomMenu() {
  const dispatch = useAppDispatch()

  type Task = {
    id: number,
    list_name: string,
    title: string,
    description: string,
    completed: boolean
  }

  const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)
  const fullscreen = useAppSelector(state => state.bottomMenu.fullscreen)
  const task: Task | null = useAppSelector(state => state.bottomMenu.task)
  const taskLoading = useAppSelector(state => state.bottomMenu.loading)

  return (
    <div className="h-full w-full bg-white flex flex-col px-6 border border-slate-300 rounded-2xl divide-y">

      <div className="justify-between items-center flex py-3 rounded-2xl">

        <div className="w-fit h-fit hover:bg-slate-100 rounded-lg p-1 cursor-pointer"
          onClick={
            () => {
              dispatch(toggleFullscreen())
            }}>
          <button className={`w-full h-full flex items-center p-1`}>
            {fullscreen ? <NonExapandLogo /> : <ExpandLogo />}
          </button>
        </div>

        <div className="cursor-pointer w-fit h-fit rounded-full flex items-center p-1 bg-slate-100 hover:bg-slate-200"
          onClick={
            () => {
              dispatch(toggleBottomMenu())
            }}
        >
          <button className={`w-full h-full text-xl flex items-center`}>
            <CloseLogo />
          </button>
        </div>
      </div>

      <div className="h-5/6 w-full py-8 flex-grow">
        {
          // taskLoading ? 'Task Loading...' : task ? `${task.list_name}` : 'Task details could not be loaded'
          taskLoading ? 'Task Loading...' : task ? <TaskDetail data={task} /> : 'Task details could not be loaded'
        }
      </div>

    </div>
  )
}
