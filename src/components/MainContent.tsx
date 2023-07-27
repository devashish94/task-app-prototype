export default function MainContent(data: any) {
  return (
    <>
      <div className="bg-white h-full w-full flex-grow flex flex-col justify-between items-center 2xl:rounded-r-2xl">
        <div className="flex flex-col flex-grow py-2 justify-center items-center">
          <p className="text-4xl">{data.view}</p>
          <p className="text-xl">{data.title}</p>
        </div>
      </div>
    </>
  );
}
