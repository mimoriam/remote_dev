import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { fetchJobItems } from "@/app/lib/react_queries/job_items/fetchJobItems";

export function searchQueryOptions(searchText: string) {
  return queryOptions({
    queryKey: ["job-items", searchText],
    queryFn: () => fetchJobItems(searchText),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: Boolean(searchText),
  });
}

export function useSearchQuery(searchText: string) {
  const { data, isLoading } = useSuspenseQuery(searchQueryOptions(searchText));

  return {
    jobItems: data?.jobItems,
    isLoading,
  } as const;
}
