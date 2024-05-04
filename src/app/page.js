"use client";
import Image from "next/image";
import SimpleForm from "./SimpleForm";
import DataDisplay from "./DataDisplay";

export default function Home() {
  return (
    <>
      <SimpleForm />
      <DataDisplay />
    </>
  );
}
