import {ReactNode} from 'react';

export type TabNavigatorParamList = {
  Home: undefined;
  Favorite: undefined;
};

export type TTabs = {
  name: keyof TabNavigatorParamList;
  label: string;
  icon: ReactNode;
};
