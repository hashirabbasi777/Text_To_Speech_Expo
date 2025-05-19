import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Text To Speech',
            tabBarIcon : ({size, color}) => <FontAwesome5 name="file-audio" size={size} color={color} />
            }} />
            <Tabs.Screen
             name="speech_to_text"
             options={{ title: 'Speech To Text',
             tabBarIcon : ({size, color}) => <FontAwesome name="microphone" size={size} color={color} /> }} />
        </Tabs>
    )
}