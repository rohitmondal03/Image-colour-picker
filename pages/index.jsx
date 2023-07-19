import Head from "next/head";
import ColorPicker from "../components/ColorPicker";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Image color picker</title>
        <meta name="description" content="Next app to select color from your image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorPicker />
    </div>
  );
}
