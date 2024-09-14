"use client";
import { useQuery } from "@tanstack/react-query";
import { ConfigType } from "./Types/types";

const useGetQuery = (
  apiRoute: string,
  queryKey: string,
  config?: ConfigType<boolean> | undefined
) => {
  let configChange: ConfigType<boolean>;

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

  // if (isLoading) return <p>Loading....</p>;
  // if (isError) return <p>Error</p>;

  return { data, isLoading, isError };
};

export default useGetQuery;
