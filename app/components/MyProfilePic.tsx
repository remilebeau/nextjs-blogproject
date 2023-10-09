import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 mx-auto border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mt-8"
        src="/images/gambit-1194x919.webp"
        alt="Remi LeBeau"
        width={200}
        height={200}
        priority
      />
    </section>
  );
}
