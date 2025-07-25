// // app/providers.tsx
// "use client";

// import { ReactNode } from "react";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { createConfig, WagmiConfig } from "wagmi";
// import { configureChains } from "wagmi";
// import { sepolia } from "wagmi/chains";
// import { publicProvider } from "wagmi/providers/public";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const { chains, publicClient } = configureChains([sepolia], [publicProvider()]);

// const { connectors } = getDefaultWallets({
//   appName: "AasaraFi",
//   projectId: "YOUR_WALLETCONNECT_PROJECT_ID", // Replace this
//   chains,
// });

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// });

// const queryClient = new QueryClient();

// export default function Providers({ children }: { children: ReactNode }) {
//   return (
//     <WagmiConfig config={wagmiConfig}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiConfig>
//   );
// }
