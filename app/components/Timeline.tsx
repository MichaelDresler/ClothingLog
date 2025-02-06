

type timelineProps = {
  date: string;
  description: string;
  isLast?:boolean;
};
export const Timeline = ({
  date,
  description,
  isLast
}: timelineProps) => {
  return (
    <>
    <div className={`h-20 pl-6 ml-2 relative ${isLast ? '' : 'border-l border-black/50 border-dashed'}`}>
        <div className="w-4 h-4 bg-[#577D4E] absolute -left-2 top-0 rotate-45"></div>
        <div className="text-sm text-[#577D4E] font-semibold absolute -top-5">{date}</div>
        <p>{description}</p>
    </div>

   
    </>
  );
};
