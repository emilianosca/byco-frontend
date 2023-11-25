import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return <div>Data from vote: {params.slug}</div>;
}
