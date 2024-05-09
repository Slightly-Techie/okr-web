type HeadingProps = {
  title: string;
  message: string
}

export default function Heading({ title, message }: HeadingProps) {
  return (
    <div>
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-[#777777] mt-1">{message}</p>
    </div>
  );
}
