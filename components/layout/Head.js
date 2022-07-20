import NextHead from "next/head";

export default function Head({ title = "" }) {
 return (
  <NextHead>
   <title>
    {title}
    {title ? " | " : ""}Portfolio HK
   </title>
   <link rel="icon" href="./../../public/Logo.png" />
  </NextHead>
 );
}