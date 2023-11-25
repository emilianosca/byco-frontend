"use client"
import React , {useState, useEffect} from "react";

export default function Questions() {
  const [isMounted, setIsMounted] = useState(false);
  // This is a side effect that runs after the first render and sets the isMounted state to true
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  } 
  return (
    <>
      <div>
        <h1 className="text-black">Here is content for complains</h1>
      </div>
    </>
  );
}
