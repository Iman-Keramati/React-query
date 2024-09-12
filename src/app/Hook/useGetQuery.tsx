'use client'
import { useQuery } from '@tanstack/react-query';

const useGetQuery = (apiRoute: string,queryKey : string) => {

    const { data, isLoading, isError } = useQuery({
        queryFn: async () =>
          await fetch(apiRoute).then((res) =>
            res.json()
          ),
        queryKey: [queryKey],
        retry: 0,
        refetchOnWindowFocus: false,
      });

    // if (isLoading) return <p>Loading....</p>;
    // if (isError) return <p>Error</p>;

    return {data , isLoading , isError} 
};

export default useGetQuery;