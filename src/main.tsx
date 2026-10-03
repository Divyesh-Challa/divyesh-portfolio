import React, { Component, ErrorInfo, ReactNode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./globals.css";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", color: "white", backgroundColor: "#050816", minHeight: "100vh", fontFamily: "sans-serif" }}>
          <h1 style={{ color: "#ef4444", fontSize: "24px", marginBottom: "16px" }}>Application Error</h1>
          <p style={{ color: "#aaa6c3", marginBottom: "20px" }}>An error occurred while rendering the page:</p>
          <pre style={{ backgroundColor: "#151030", padding: "16px", borderRadius: "8px", overflow: "auto", color: "#f87171" }}>
            {this.state.error?.toString()}
            {"\n\n"}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
