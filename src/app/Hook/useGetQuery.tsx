"use client";
import { useQuery } from "@tanstack/react-query";
import { ProductType, QueryConfigType } from "./Types/types";

const useGetQuery = (
  apiRoute: string,
  queryKey: string,
  config?: QueryConfigType<ProductType[]> | undefined
) => {
  let configChange: QueryConfigType<ProductType[]>;

  if (typeof config === "undefined") {
    configChange = { retry: 0 };
  } else {
    configChange = config;
  }

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetch(apiRoute).then((res) => res.json()),
    queryKey: [queryKey],
    ...configChange,
  });

  return { data, isLoading, isError };
};

export default useGetQuery;
