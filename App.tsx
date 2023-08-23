import React from 'react';
// 给app入口包裹 container 插件
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { useColorScheme } from 'react-native';
import { Navigator, Screen } from '@/routers/stack';
import TabNavigation from '@/components/TabNavigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// const HeaderTitle = () => {
//   return <Text>我日你妈</Text>;
// };

// const HeaderBack = () => <Text>返回</Text>;

function App(): JSX.Element {
  // 确认当前是否黑色背景
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={isDarkMode ? eva.dark : eva.light}>
        <NavigationContainer>
          <Navigator>
            <Screen
              name="TabNavigation"
              component={TabNavigation}
              options={{ headerShown: false }}
            />
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

export default App;
