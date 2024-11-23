import Image from "next/image";

export default function Home() {

  let linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main>
      <h1 className="text-3xl">Rookie Quiz</h1>
      <p>Are you smarter than a 6th grader?</p>
      <li><Link href="./Math/" className={linkStyles}>Math</Link></li>
      <li><Link href="./Science/" className={linkStyles}>Science</Link></li>
    </main>
    
  );
}
