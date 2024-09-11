"use client";
import { useMutation, useQuery } from "@tanstack/react-query";

interface ProductType {
  id: number;
  title: string;
}

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () =>
      await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      ),
    queryKey: ["products"],
    retry: 0,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: (newProduct: ProductType) => {
      return fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
      });
    },
  });

  if (mutation.isSuccess) {
    console.log(mutation.variables);
    data.push(mutation.variables);
  }

  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>Error</p>;

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        React Query
      </div>

      <ul>
        {data.map((i: { title: string }, idx: number) => (
          <li key={idx}>{i.title}</li>
        ))}
      </ul>
      {/* MUTATION TEST */}
      {mutation.isPending && <p>adding new product ....</p>}
      <button
        className="rounded-lg bg-green-600 text-[18px] scale-[1] text-white p-4 m-5 hover:scale-[0.9] transition-all duration-500 hover:bg-green-800"
        onClick={() => {
          mutation.mutate({
            id: Math.random(),
            title: "New Product" + Math.random(),
          });
        }}
      >
        Add a product
      </button>
    </>
  );
}
