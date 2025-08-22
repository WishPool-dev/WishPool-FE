type MyPageListProps = {
  title: string;
  children: React.ReactNode;
};
const MyPageList = ({ title, children }: MyPageListProps) => {
  return (
    <div>
      <h3 className="text-text subtitle2 mb-[1.6rem]">{title}</h3>
      <ul className="bg-background-01 flex flex-col divide-y divide-gray-300 rounded-[12px]">
        {children}
      </ul>
    </div>
  );
};

export default MyPageList;
