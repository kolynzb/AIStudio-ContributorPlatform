"use client";

import { Toast } from "@/components/ui/toast";
import { store } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RouterProvider } from "react-aria-components";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "../components/theme-provider";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider enableSystem attribute="class">
        <QueryClientProvider client={queryClient}>
          <ReduxProvider store={store}>{children}</ReduxProvider>
          <Toast />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </ThemeProvider>
    </RouterProvider>
  );
}
