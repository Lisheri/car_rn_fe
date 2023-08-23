import type { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import type {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import { BottomNavigationProps } from '@ui-kitten/components';
import { useState } from 'react';

export const useBottomNavigationState = (
  initialState = 0,
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>,
  state: TabNavigationState<ParamListBase>,
): BottomNavigationProps => {
  const [selectedIndex, setSelectedIndex] = useState(initialState);

  const onPress = (route: any, isFocused: boolean) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, {
        name: route.name,
        merge: true,
      });
    }
  };
  const onSelect = (idx: number) => {
    const isFocused = state.index === idx;
    const route = state.routes[idx];
    onPress(route, isFocused);
    setSelectedIndex(idx);
  };
  return { selectedIndex, onSelect };
};
