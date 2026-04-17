const ProductSectionTwo = () => {
  return (
    <>
      <div className="bg-[#142026]">
        <h1 className="text-[#fffcfc] text-[30px] sm:text-[44px] font-serif font-bold text-center pt-16">
          Shop by Collection
        </h1>
        <p className="text-[#fffcfc] text-center mt-3 font-light">
          I'm a title. Click here to add your own text and edit me.
        </p>

        {/* ----------prodect section----------- */}

        <div className="mt-15 mx-0 md:mt-20 md:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-15 ">
          <div class=" aspect-square cursor-pointer relative overflow-hidden rounded-xl group">
            <img
              src="gym_model.jpg"
              class="w-full h-full object-cover rounded-xl transition duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-10 ">
              <h3 className="text-[#fffcfc] font-bold text-3xl font-serif">
                Yoga & Pilates
              </h3>
              <p className="text-[#fffcfc] font-light font-serif mt-2">
                Shop Collection
              </p>
            </div>
          </div>

          <div class=" aspect-square cursor-pointer relative overflow-hidden rounded-xl group">
            <img
              src="gym_model.jpg"
              class="w-full h-full object-cover rounded-xl transition duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-10 ">
              <h3 className="text-[#fffcfc] font-bold text-3xl font-serif">
                Fitness Accessories
              </h3>
              <p className="text-[#fffcfc] font-light font-serif mt-2">
                Shop Collection
              </p>
            </div>
          </div>

          <div class=" aspect-square cursor-pointer relative overflow-hidden rounded-xl group">
            <img
              src="gym_model.jpg"
              class="w-full h-full object-cover rounded-xl transition duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-10 ">
              <h3 className="text-[#fffcfc] font-bold text-3xl font-serif">
                Weight Traning
              </h3>
              <p className="text-[#fffcfc] font-light font-serif mt-2">
                Shop Collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductSectionTwo;
