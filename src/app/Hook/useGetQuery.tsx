"use client";
import { useQuery } from "@tanstack/react-query";
import { ProductType, QueryConfigType } from "./Types/types";

const useGetQuery = (
  apiRoute: string,
  queryKey: string,
  queryConfig?: QueryConfigType<ProductType[]>,
  headerConfig?: RequestInit
) => {
  let configChange: QueryConfigType<ProductType[]>;
  let header: RequestInit;

  if (!headerConfig) {
    header = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
  } else {
    header = headerConfig;
  }

  if (!queryConfig) {
    configChange = { retry: 0 };
  } else {
    configChange = queryConfig;
  }

  const query = useQuery({
    queryFn: async () =>
      await fetch(apiRoute, header).then((res) => res.json()),
    queryKey: [queryKey],
    ...configChange,
  });

  return query;
};

export default useGetQuery;
