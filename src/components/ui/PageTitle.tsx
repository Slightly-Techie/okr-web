type PageTitleProps = {
    title:string
}

function PageTitle({title}:PageTitleProps) {
  return (
    <div className="fixed z-[3] w-full h-[5vh] flex items-center p-5 bg-white">
        <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}

export default PageTitle