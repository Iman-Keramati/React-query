"use client";
import { MutationOptions, useMutation } from "@tanstack/react-query";
import { ProductType } from "./Types/types";

const usePostMutation = (
  apiRoute: string,
  key: string,
  method?: undefined | "POST" | "PUT" | "DELETE",
  mutationConfig?: MutationOptions<Response, Error, ProductType>,
  headerConfig?: RequestInit
) => {
  let methodType = "POST";
  let header: RequestInit;

  if (typeof method === "string") {
    methodType = method;
  }

  if (headerConfig) {
    header = headerConfig;
  }

  const mutation = useMutation({
    mutationFn: (newProduct: ProductType) => {
      return fetch(apiRoute, {
        method: methodType,
        body: JSON.stringify(newProduct),
        ...header,
      });
    },
    ...mutationConfig,
    mutationKey: [key],
  });

  return mutation;
};

export default usePostMutation;
