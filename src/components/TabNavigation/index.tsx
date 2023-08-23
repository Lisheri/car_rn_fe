import { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { ParamListBase, RouteProp } from '@react-navigation/native';
import { HomeScreen } from '@/pages/HomeScreen';
import { SettingsScreen } from '@/pages/SettingsScreen';
import { HomeDetails } from '@/pages/HomeDetails';
import { MyTabBar } from './TabBar';
import { SafeAreaView, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

type TabProps = {
  navigation: any;
  route: RouteProp<ParamListBase, 'TabNavigation'>;
};

const TabNavigation: React.FC<TabProps> = memo((props: TabProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '首页' }}
        />
        <Tab.Screen
          name="Detail"
          component={HomeDetails}
          options={{ title: '详情' }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: '我的' }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },
});

export default TabNavigation;
