import { memo, useEffect, useState } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

export const HomeScreen = memo((props: any) => {
  const { navigation, route } = props;
  const [curVal, setCurVal] = useState<string>();

  useEffect(() => {
    setCurVal(route.params?.textVal || '');
  }, [route.params?.textVal]);

  const handleClick = () => {
    navigation.navigate('Detail');
  };
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{curVal}</Text>
      <Button onPress={handleClick}>点击跳转</Button>
    </Layout>
  );
});
