import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import CardList from "./study/cardList";
import Three from "./study/three";
import Hero from "./study/hero";
import FetchStudy from "./study/fetchStudy";
import AxiosStudy from "./study/axiosStudy";
import About from "./about";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import comps from "../styles/Comps.module.scss";

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
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="the best programmer" />
      </Head>
      <div>
        <div>Home</div>
        <button className="btn-r"> Click</button>
      </div>
    </>
  );
}
