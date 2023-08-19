import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchAllList } from '../../store/slices/listSlice'
import ThreeDots from "../../svg-components/ThreeDots";
import EditLogo from "../../svg-components/EditLogo";
import Bin from "../../svg-components/Bin";
import Relax from "../../svg-components/Relax";
import Loader from '../../svg-components/Loader'

export default function Tasks({ path }: any) {
  const dispatch = useAppDispatch()

  const lists = useAppSelector(state => state.lists.lists)
  const loading = useAppSelector(state => state.tasks.loading)
  const location = path.slice(1)
  console.log(location)

  useEffect(() => {
    // dispatch(nullTheArray())
    // console.clear()
    dispatch(fetchAllList())
  }, [path])

  return (
    <>
      {
        loading ? <Loader /> : lists && lists.length > 0 ? lists.map((task: any, idx: number) => {
          return (
            <div key={idx} className="text-black w-full split-display:px-10 cursor-pointer">
              <div className="px-2 py-4 split-display:px-4 flex justify-between hover:bg-slate-100 rounded-xl ">

                <div className="flex-grow flex flex-col px-2 duration-300 transition-all ease-in-out">
                  <div className="flex-grow font-bold duration-300 transition-all ease-in-out line-clamp-1">{task.name}</div>
                  <div className="line-clamp-1 duration-300 transition-all ease-in-out ">{task.pin === 1 ? 'true' : 'false'}</div>
                </div>

                <div className="flex self-center gap-4">
                  <div> <EditLogo /> </div>
                  <div> <Bin /> </div>
                  <div className=""> <ThreeDots /> </div>
                </div>

              </div>
            </div>
          );
        }) :
          <div className="flex flex-col text-center w-full h-full items-center justify-center overflow-hidden">
            <Relax />
            <p className="text-lg text-slate-600">Enjoy your free time, no tasks left!</p>
          </div>
      }
    </>
  )
}
