import React, {PropsWithChildren, useEffect} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import RNReStart from 'react-native-restart'

import ErrorFallback from './ErrorFallback';
import {useTypedSelector} from '../../redux/store';

const GlobalErrorBoundary: React.FC<PropsWithChildren> = ({children}) => {
  const error = useTypedSelector(state => state.movie.error);

  useEffect(() => {
    if (error) {
      console.error('Global Error:', error);
    }
  }, [error]);

  if (error) {
    return <ErrorFallback error={error} resetErrorBoundary={() => RNReStart.restart()} />;
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
