"use client";
import { useGetCharactors } from "@/api";
import Card from "@/components/Card";
import SingleCharacter from "@/components/SingleCharacter";
import { CardTypes } from "@/types/card.types";
import React, { useState } from "react";

export default function Home() {
  const [id, setId] = useState<string | null>(null);
  const { data, isLoading, isError, error } = useGetCharactors();

  return (
    <main className="bg-gray-50 min-h-screen overflow-hidden w-screen px-6 py-10">
      <section className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
        {data?.data?.map((res: CardTypes) => (
          <Card key={res?.id} {...res} setId={setId} />
        ))}
      </section>
      <SingleCharacter id={id} setId={setId} />
    </main>
  );
}
