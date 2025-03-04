import Image from "next/image";

export const Skill = () => {
  return (
    <div className="group relative flex cursor-pointer">
      <div className="w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 border border-gray-500 rounded-full flex items-center justify-center group-hover:bg-white filter group-hover:grayscale transition duration-300 ease-in-out">
        <Image
          className="w-16 h-16 object-cover"
          src="/soitic.png"
          alt="Soitic"
          width={200}
          height={200}
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0 md:w-28 md:h-28 xl:w-32 xl:h-32">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">100%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
