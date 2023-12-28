import Image from "next/legacy/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href={`https://chat.openai.com`} target="_blank">
        <h1 className="text-3xl text-center text-yellow-600">
          Please click me to start learning
        </h1>
      </Link>
      <Image src={`/images/image-1.png`} width={400} height={400} alt="home" />
    </main>
  );
}
