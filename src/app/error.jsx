"use client";
import { useEffect } from "react";
export default function errorPage({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return <div>{error.message}</div>;
}
