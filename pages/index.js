import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Home(props) {
 return (
  <>
   <Layout>
   <Head title="Home"/>

   <div className="container">
    <h1>Home page</h1>
    {props.albums.map((album) => {
      return <h3 key={album.id}>{album.attributes.title}</h3>;
    })}
   </div>
  </Layout>
  </>
 );
}

export async function getStaticProps() {

  let albums = [];

  try {
    const response = await axios.get(BASE_URL);

    albums = response.data;
  } catch(error) {
    console.log(error);
  }

  return {
    props: {
      albums: albums,
    },
  };


}
