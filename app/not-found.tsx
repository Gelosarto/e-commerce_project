import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex p-10 flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
      <p className="text-gray-500 mt-2 text-md">The page you are looking for does not exist. return to <Link href="/" className="underline">Home</Link></p>
      <Image
        src="/404/404.gif"
        alt="404 not found"
        width={800}
        height={800}
        className="mt-10"
      />
    </div>
  );
}
