const HeroSection = () => {
  return (
    <>
      <div className="min-h-screen relative flex items-center justify-center lg:block">
        <div className="w-full lg:w-1/3 px-4 text-center lg:text-left lg:absolute lg:top-24 lg:left-32">
          <p className="text-[#fffcfc] text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-semibold leading-tight lg:leading-[68px]">
            Your Essentials for a Perfect Home Workout
          </p>
          <button className="bg-[#a9977b] text-white rounded-xl px-6 py-3 text-sm mt-6 hover:bg-[#8c7a60] hover:scale-105 transition duration-300 cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
