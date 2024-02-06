import Nav from "./components/nav";
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
      <Image 
        src='/bdg.png'
        width={150}
        height={150}
        alt="Bluegrass Developers Guild Logo"
      />
      <Nav />
      </div>
      
      

    </main>
  );
}
