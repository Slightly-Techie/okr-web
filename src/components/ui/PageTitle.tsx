type PageTitleProps = {
  title: string;
};

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="fixed z-[3] w-full h-[7vh] flex items-center p-5 bg-white">
      <h3 className="font-medium text-xl text-dark">{title}</h3>
    </div>
  );
}

export default PageTitle;
