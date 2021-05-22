import Alert from "antd/lib/alert";
import React, { Component } from "react";

export class LightErrorBoundary extends Component<{}, {error: Error}> {
  public state = {
    error: null,
  };

  public componentDidCatch(error: Error) {
    this.setState({ error })
  }

  public render() {
    if (this.state.error) {
      return <Alert
        message="Error"
        description={this.state.error.message}
        type="error"
      />
    }

    return this.props.children;
  }
}
