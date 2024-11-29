import Image from "next/image";

export default function Home() {

  let linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main>
      <h1 className="text-3xl">Quizzes for fun</h1>
      <p>Let's test your knowledge</p>
      <li><Link href="./Math/" className={linkStyles}>Math</Link></li>
      <li><Link href="./Science/" className={linkStyles}>Science</Link></li>
      <li><Link href="./Resume/" className={linkStyles}>My Resume (not part of the quiz)</Link></li>
    </main>
    
  );
}
