import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

export default function Home() {
  const [num, setNum] = useState(0);
  const increment = () => {
    setNum(num + 3);
  };
  useEffect(() => {
    console.log("didupdate?");
  }, []);
  return (
    <div>
      <Link href="#">
        <h2>sujin</h2>
      </Link>
      <h1>{num}</h1>
      <button onClick={() => Router.push("/api/hello.js")}>Click</button>
    </div>
  );
}
