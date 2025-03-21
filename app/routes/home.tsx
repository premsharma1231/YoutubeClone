import { useState } from "react";
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Card } from "../Cards/card";
import { TopNavbar } from "../Navbar/topNavbar"
import { ShortLeftNavbar } from "../Navbar/leftNavbar"
// import {GlobalProvider} from "../Global"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Entertainment" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [searchedContent, setSearchedContent] = useState("songs");

  return(
    <div className="bg-gray-950">

    <TopNavbar setSearchedContent={setSearchedContent} />
    <Welcome />
    <Card searchedContent={searchedContent} />
    </div>
    );
}