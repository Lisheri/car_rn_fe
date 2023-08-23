import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Text, Button } from '@ui-kitten/components';
import { memo } from 'react';
import { View } from 'react-native';

type SettingsProps = {
  navigation: any;
  route: RouteProp<ParamListBase, 'Settings'>;
};

export const SettingsScreen = memo(({ navigation }: SettingsProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>我的</Text>
    </View>
  );
});
