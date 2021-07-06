import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import CardList from "./cardList";
import Three from "./three";
import Hero from "./hero";
import FetchStudy from "./apiStudy/fetchStudy";
import AxiosStudy from "./apiStudy/axiosStudy";

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
  return (
    <div>
      <AxiosStudy />
      <FetchStudy />
      <CardList />
    </div>
  );
}
