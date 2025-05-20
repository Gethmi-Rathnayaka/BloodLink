"use client";

import { connectDB } from "@/lib/mongodb";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    const fetchData = async () => {
      try {
        await connectDB();
        console.log("connected to DB");
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      <div>Homepage</div>
    </div>
  );
}
