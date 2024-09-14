import { QueryOptions } from "@tanstack/react-query";

export interface ConfigType<T> extends QueryOptions<T> {
  refetchOnWindowFocus?: T;
}

export type ProductType = {
  id: number;
  title: string;
};

export interface PropType {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
}
