import React, { Component, ErrorInfo, ReactNode } from "react";

import styled from "styled-components";

const Page = styled.div`
    padding: 20px;
    text-align: center;
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <Page>
            <h1>Something went wrong.</h1>
        </Page>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;