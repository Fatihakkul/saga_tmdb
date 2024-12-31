import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigator/AppNavigator';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {AppLoading} from './src/components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {theme} from './src/theme';
import GlobalErrorBoundary from './src/components/errorBoundary/GlobalErrorBoundary';

const App = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalErrorBoundary>
            <StatusBar
              backgroundColor={theme.colors.white}
              barStyle="dark-content"
            />
            <AppNavigator />
            <AppLoading />
            <FlashMessage position="top" floating={true} />
          </GlobalErrorBoundary>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export default App;
