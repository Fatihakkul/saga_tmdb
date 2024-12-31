import React, {PropsWithChildren, useEffect} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import RNReStart from 'react-native-restart'
import ErrorFallback from './ErrorFallback';
import {useTypedSelector} from '../../redux/store';

const GlobalErrorBoundary: React.FC<PropsWithChildren> = ({children}) => {
  const globalError = useTypedSelector(state => state.globalState);

  useEffect(() => {
    if (globalError.failed.error) {
      console.error('Global Error:', globalError);
    }
  }, [globalError.failed.error]);

  if (globalError.failed.error) {
    return <ErrorFallback error={globalError.failed.error} resetErrorBoundary={() => RNReStart.restart()} />;
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        console.log('Hata sıfırlandı!');
      }}>
      {children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
