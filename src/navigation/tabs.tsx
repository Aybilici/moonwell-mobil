import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/Setting";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
            <Tab.Screen name="Ayarlar" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default Tabs;