/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Filter: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Castings: undefined;
  Profile: undefined;
  Applications: undefined;
  Messages: undefined;
  Settings: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export interface CastingDTO {
  id: number;
  tags?: string[];
  title: string;
  text?: string;
  type?: string;
  location?: string;
  country?: string;
  dateFrom?: string;
  dateTo?: string
  days?: number;
  payed?: boolean;
  budget?: number;
  insured?: boolean;
  numberOfRoles?: number;
  gender?: string[];
  ageFrom?: number;
  ageTo?: number;
  carRequired?: boolean;
  languages?: string[];
  picture?: string;
  deadline?: string;
}
