import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomNavigationTab, BottomNavigation } from '@ui-kitten/components'; // UI Kitten的组件
import { memo } from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useBottomNavigationState } from './useBottomNavigationState';
import { iconOptions } from './iconOptions';

export const MyTabBar = memo(
  ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const bottomState = useBottomNavigationState(0, navigation, state);
    return (
      <BottomNavigation
        style={styles.bottomNavigation}
        {...bottomState}
        indicatorStyle={{ display: 'none' }}>
        {state.routes.map(route => {
          const { options } = descriptors[route.key];
          const label: string = options.title || route.name;

          return (
            <BottomNavigationTab
              title={label}
              icon={iconOptions[route.name]}
              key={route.key}
            />
          );
        })}
      </BottomNavigation>
    );
  },
);

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 1,
    height: 60,
    backgroundColor: '#fff',
  },
});
