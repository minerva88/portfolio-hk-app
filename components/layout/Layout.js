import Link from "next/link";

export default function Layout({ children }) {
 return (
  <>
   <nav>
    <Link href="/">
     <a>Home</a>
    </Link>
    <Link href="/about">
     <a>About</a>
    </Link>
    <Link href="/photos">
     <a>Photos</a>
    </Link>
    <Link href="/writings">
     <a>Writings</a>
    </Link>
    <Link href="/contact">
     <a>Contact</a>
    </Link>
   </nav>

   <div className="container">{children}</div>
  </>
 );
}