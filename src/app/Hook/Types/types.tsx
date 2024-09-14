export type ConfigType = {
  retry?: number;
  refetchOnWindowFocus?: boolean;
};

export type ProductType = {
  id: number;
  title: string;
};

export type PropType = {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
};
