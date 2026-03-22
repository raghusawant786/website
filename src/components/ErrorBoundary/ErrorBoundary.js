import React from 'react';
import styles from './ErrorBoundary.module.css';

/**
 * ErrorBoundary Component
 * Catches React component errors and displays a fallback UI
 * Improves user experience and app stability
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer} role="alert" aria-live="assertive">
          <div className={styles.errorContent}>
            <h2 className={styles.errorTitle}>⚠️ Something went wrong</h2>
            <p className={styles.errorMessage}>
              We encountered an error while rendering this section. Please try refreshing the page.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
              <details className={styles.errorDetails}>
                <summary>Error Details (Development Only)</summary>
                <pre className={styles.errorStack}>
                  {this.state.error && this.state.error.toString()}
                  {'\n\n'}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
            <button
              className={styles.retryButton}
              onClick={() => window.location.reload()}
              aria-label="Refresh page to retry"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
