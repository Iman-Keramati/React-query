"use client";
import { useMutation } from "@tanstack/react-query";
import { ProductType } from "./Types/types";

const usePostMutation = (
  apiRoute: string,
  key: string,
  method?: undefined | string
) => {
  let methodType = "POST";
  if (typeof method === "string") {
    methodType = method;
  } else {
    methodType;
  }

  const mutation = useMutation({
    mutationFn: (newProduct: ProductType) => {
      return fetch(apiRoute, {
        method: "POST",
        body: JSON.stringify(newProduct),
      });
    },
    mutationKey: [key],
  });

  return mutation;
};

export default usePostMutation;
