import Image from "next/legacy/image";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image src={`/images/image-3.png`} width={400} height={400} alt="about" />
    </main>
  );
}
