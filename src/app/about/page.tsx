import Image from "next/legacy/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image src={`/images/image-2.png`} width={400} height={400} alt="about" />
    </main>
  );
}
