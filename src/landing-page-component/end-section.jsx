const EndSection = () => {
  return (
    <>
      <div className="bg-[#a9977b] py-16">
        <h1 className="text-[#141414] text-[30px] sm:text-[44px]  font-bold text-center   font-serif">
          The Best Equipment for <br /> Meeting Your Goals
        </h1>
        <p className="text-center font-light text-[#141414] mt-3">
          I'm a title. Click here to add your own text and edit me.
        </p>

        {/* ---------shop all button---------- */}
        <div className="flex justify-center mt-2 ">
          <a
            href="/shopNowPage"
            className="bg-[#141414] text-white rounded-xl px-6 py-3 text-sm mt-6 hover:bg-[#142026] hover:scale-105 transition duration-300 cursor-pointer "
          >
            Shop All
          </a>
        </div>
      </div>
    </>
  );
};
export default EndSection;
