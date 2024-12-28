const Chat = () => {
  return (
    <div className="h-[140px] w-full p-5 bg-white rounded-[18px] border-2 border-neutral-100 flex-col justify-center items-start gap-[30px] inline-flex overflow-hidden">
      <div className="px-2.5 justify-start items-center gap-2.5 inline-flex">
        <div className="w-10 h-10 rounded-[60px] border border-black/10 justify-center items-center flex overflow-hidden">
          <img className="w-10 h-10" src="https://via.placeholder.com/40x40" />
        </div>
        <div className="text-center text-black/60 text-lg font-medium font-['IRANSansX']">
          Type new twitt...
        </div>
      </div>
      <div className="self-stretch pl-2.5 justify-between items-center inline-flex">
        <div className="w-[344px] justify-center items-start gap-10 flex">
          <div className="w-6 h-6 relative flex-col justify-start items-start flex overflow-hidden" />
          <div className="w-6 h-6 relative flex-col justify-start items-start flex overflow-hidden" />
          <div className="w-6 h-6 relative flex-col justify-start items-start flex overflow-hidden" />
          <div className="w-6 h-6 relative flex-col justify-start items-start flex overflow-hidden" />
          <div className="w-6 h-6 relative flex-col justify-start items-start flex overflow-hidden" />
          <div className="w-6 h-6 relative flex-col justify-start items-start flex overflow-hidden" />
        </div>
        <div className="px-2.5 py-1.5 bg-[#484848] rounded-[60px] flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
          <div className="text-center text-neutral-100 text-xs font-semibold font-['IRANSansX'] leading-[18px]">
            ارسال
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
