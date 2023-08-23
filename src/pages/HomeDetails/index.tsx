import type { ParamListBase, RouteProp } from '@react-navigation/native';
import { Layout, Text, Button, Input } from '@ui-kitten/components';
import { memo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

type DetailProps = {
  navigation: any;
  route: RouteProp<ParamListBase, 'Detail'>;
};

export const HomeDetails: React.FC<DetailProps> = memo((props: DetailProps) => {
  const { navigation } = props;

  const [textVal, setTextVal] = useState<string>('');

  const handleBackToPrev = () => {
    console.info('11111');
    navigation.navigate('Home', { textVal });
  };

  const handleTextChange = (nextValue: string) => {
    setTextVal(nextValue);
  };

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>Details</Text>
        <Button style={styles.ButtonStyle} onPress={() => navigation.goBack()}>
          Go Back
        </Button>
        <Button
          style={styles.ButtonStyle}
          onPress={() => navigation.navigate('Home')}>
          To Home
        </Button>
        <Input
          placeholder="请输入需要传递的内容"
          value={textVal}
          onChangeText={handleTextChange}
        />
        <Button style={styles.ButtonStyle} onPress={handleBackToPrev}>
          传递数据到前一屏幕
        </Button>
      </View>
    </Layout>
  );
});

const styles = StyleSheet.create({
  ButtonStyle: {
    marginTop: 32,
  },
});
