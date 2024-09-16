import { QueryOptions } from "@tanstack/react-query";

export interface QueryConfigType<T> extends QueryOptions<T> {
  refetchOnWindowFocus?: boolean;
}

// A SAMPLE JUST FOR EXAMPLE PURPOSES
export interface ProductType {
  id: number;
  title: string;
}

export interface PropType {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
  loaderColor?: string;
  loaderSize?: number;
}
export interface LoadingPropType {
  size?: number;
  color?: string;
}
