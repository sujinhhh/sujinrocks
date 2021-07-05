import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import CardList from "./cardList";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function Home() {
  const [num, setNum] = useState(0);
  const increment = () => {
    setNum(num + 3);
  };
  useEffect(() => {
    console.log("didupdate?");
  }, []);
  return (
    <Wrapper>
      <Link href="#">
        <Title>sujin</Title>
      </Link>
      <CardList />
      <h1>{num}</h1>
      <Button primary onClick={() => Router.push("/api/hello.js")}>
        Click
      </Button>
    </Wrapper>
  );
}
