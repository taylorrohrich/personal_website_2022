import Head from "next/head";
import Element from "@/components/Element";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Taylor Rohrich</title>
        <meta name="description" content="Official website of Taylor Rohrich" />
      </Head>
      <div>
        <Element name="header">
          <Element
            name="div"
            attribute={["name", "Taylor Rohrich"]}
            link="/about"
            selfClosing
            comment="That's me"
          />
        </Element>
        <Element name="div">
          <Element
            name="a"
            attribute={["href", "LinkedIn"]}
            link="https://www.linkedin.com/in/taylor-rohrich/"
            selfClosing
          />
          <Element
            name="a"
            attribute={["href", "Github"]}
            link="https://github.com/taylorrohrich"
            selfClosing
          />
        </Element>
      </div>
    </>
  );
}
