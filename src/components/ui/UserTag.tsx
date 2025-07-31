const UserTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="caption1 bg-button-color flex h-[2.3rem] w-[4.7rem] items-center justify-center rounded-[4px] px-[0.8rem] text-white">
      {children}
    </span>
  );
};

export default UserTag;
