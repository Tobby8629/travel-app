import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  const navigation = useNavigation()
  useEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <View>
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </View>
  )
}

export default Home