"use client";
import { useQuery } from "@tanstack/react-query";
import { ConfigType } from "./Types/types";

const useGetQuery = (
  apiRoute: string,
  queryKey: string,
  config?: ConfigType | undefined
) => {
  let configChange: ConfigType;

  if (typeof config === "undefined") {
    configChange = { retry: 0, refetchOnWindowFocus: false };
  } else {
    configChange = config;
  }

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetch(apiRoute).then((res) => res.json()),
    queryKey: [queryKey],
    retry: configChange.retry,
    refetchOnWindowFocus: configChange.refetchOnWindowFocus,
  });

  // if (isLoading) return <p>Loading....</p>;
  // if (isError) return <p>Error</p>;

  return { data, isLoading, isError };
};

export default useGetQuery;
