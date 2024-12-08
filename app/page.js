import Image from "next/image";
import Link from "next/link";

export default function Home() {

  let linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main>
      <h1 className="text-3xl">Diem's Resume</h1>
      <ul>
        <li><Link href="./Resume/" className={linkStyles}>My Resume</Link></li>
      </ul>
    </main>
    
  );
}
