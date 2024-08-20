import {
  defaultShouldDehydrateQuery,
  isServer,
  QueryCache,
  QueryClient,
} from "@tanstack/react-query";
import { handleError } from "@/app/lib/handleError";

function makeQueryClient() {
  return new QueryClient({
    //* Have to handle errors in v5 this way globally:
    queryCache: new QueryCache({
      onError: handleError,
    }),
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
