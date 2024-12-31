import { TabNavigatorParamList } from "./TabNavigatorParamList";

export type TRootStackParamlis = {
  TabNavigator: { screen: keyof TabNavigatorParamList };
  Detail: { movieId: number };
  ArtistDetail: { artistId: number };
};
