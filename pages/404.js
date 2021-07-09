import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFond = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found text-c">
      <h1>Oooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go Back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFond;
