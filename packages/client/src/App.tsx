import React, {useState} from "react";
import ReactDOM from "react-dom";
import { trpc } from "./trpc";
import { QueryClient, QueryClientProvider } from 'react-query'

import "./index.scss";

const client = new QueryClient();

const AppContent = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: client</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
    </div>
  );
};

const App = () => {
  const [ trpcClient ] = useState(() => trpc.createClient({
    url: 'http://localhost:8000/trpc'
  }))
  return (
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
ReactDOM.render(<AppContent />, document.getElementById("app"));
