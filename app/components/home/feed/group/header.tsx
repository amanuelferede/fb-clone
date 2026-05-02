import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div className="flex space-x-3">
      <div className="w-12 h-12 relative rounded-lg">
        <Link href={`/ziamanuel`}>
          <Image
            src={`/users/19.jpg`}
            alt="Amanuel Fered"
            width={0}
            height={0}
            sizes="100vh"
            className="w-full h-full brightness-80 rounded-lg object-cover"
          />
        </Link>

        <Link href={`/ziamanuel`}>
          <Image
            src={`/users/14.jpg`}
            alt="Amanuel Fered"
            width={0}
            height={0}
            sizes="100vh"
            className="absolute -right-1 -bottom-1 w-7 h-7 rounded-full object-cover border border-white"
          />
        </Link>
      </div>

      <div className="flex flex-col">
        <p className="text-[1rem] text-zinc-500 font-semibold">
          React developers
        </p>
        <p className="text-[1rem] font-semibold">December 16 at 9:40 PM</p>
      </div>
    </div>
  );
}
