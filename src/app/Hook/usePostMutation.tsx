"use client";
import { MutationOptions, useMutation } from "@tanstack/react-query";
import { ProductType } from "./Types/types";

const usePostMutation = (
  apiRoute: string,
  key: string,
  method?: undefined | string,
  config?: MutationOptions<Response, Error, ProductType>
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
    ...config,
    mutationKey: [key],
  });

  return mutation;
};

export default usePostMutation;
