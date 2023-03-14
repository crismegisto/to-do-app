import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AppNavigator from 'components/AppNavigator';
import ErrorFallback from 'components/ErrorFallback';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppNavigator />
    </ErrorBoundary>
  );
}

if (__DEV__) {
  import('config/reactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default App;
