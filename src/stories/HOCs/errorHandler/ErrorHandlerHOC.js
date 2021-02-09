import React, { Component } from "react";
import "./error-message.css";

class ErrorHandlerHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erorr: "",
      devError: false,
    };
  }

  errorHandler = (err) => {
    switch (err) {
      case "devError":
        this.setState({ error: "Warning: No components was passed to <ErrorHandler />.", devError: true });
        break;
      case "error":
        console.error("Unable to render component. Check passed component for errors.");
        this.setState({ error: "Sorry, something went wrong. Please contact with administrator." });
        break;
      default:
        return;
    }
  };

  // Ошибка для разработчика, если ErrorHandlerHOC используется в холостую/без компонентов
  componentDidMount() {
    if (!this.props.children) {
      this.errorHandler("devError");
    }
  }

  // Если в дочернем компоненте проблемы
  componentDidCatch(error, info) {
    this.errorHandler("error");
  }

  render() {
    if (this.state.devError && this.state.error) return <span className="error-message">{this.state.error}</span>;
    if (this.state.error && !this.state.devError) {
      return (
        <div className="error-container">
          <span className="error-message">{this.state.error}</span>
          <button>GO BACK</button>
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorHandlerHOC;
