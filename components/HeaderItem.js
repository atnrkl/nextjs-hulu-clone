import Image from "next/image";

export default function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center w-12 sm:w-20 hover:text-white cursor-pointer group">
      {/* <Image src={Icon} className="h-8 mb-1" /> */}
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking widest">
        {title}
      </p>
    </div>
  );
}
