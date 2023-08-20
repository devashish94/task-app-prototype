export default function ({ data }: any) {
  return (
    <>
      <div className="flex flex-col justify-start items-center py-10 w-full h-full bg-slate-50 rounded-xl">
        <div>ID: {data.task_id}</div>
        <div>List: {data.list_name}</div>
        <div>Title: {data.title}</div>
        <div>Description: {data.description}</div>
        <div>Completed: {data.completed}</div>
      </div>
    </>
  )
}
