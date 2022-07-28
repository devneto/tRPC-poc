import React, {useState} from "react";
import ReactDOM from "react-dom";
import { trpc } from "./trpc";
import { QueryClient, QueryClientProvider } from 'react-query'

import "./index.scss";

const client = new QueryClient();

const AppContent = () => {
  const hello = trpc.useQuery(["hello"])
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      
      <div>{JSON.stringify(hello)}</div>
    </div>
  );
};

const App = () => {
  const [ trpcClient ] = useState(() => trpc.createClient({
    url: 'http://localhost:3001/trpc/hello'
  }))
  return (
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
