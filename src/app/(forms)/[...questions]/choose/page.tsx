import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return <div>Data from choose: {params.slug}</div>;
}
