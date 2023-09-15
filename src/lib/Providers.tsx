"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Provider = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export function Provider({ children }: Provider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
