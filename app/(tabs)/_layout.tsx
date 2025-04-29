import React from 'react';
import { Tabs } from 'expo-router';
import { withUnistyles } from 'react-native-unistyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const UniTabs = withUnistyles(Tabs, (theme) => ({
  screenOptions: {
    headerStyle: {
      backgroundColor: theme.colors.background,
      borderBottomWidth: 0.5,
      borderBottomColor: 'gray',
    },
    headerTitleStyle: {
      color: theme.colors.onBackground,
      fontSize: theme.spacing.md,
    },
    tabBarStyle: {
      backgroundColor: theme.colors.background,
      borderTopWidth: 1,
      borderTopColor: theme.colors.secondary,
    },
    tabBarLabelStyle: {
      fontSize: theme.spacing.md,
      padding: theme.spacing.sm,
      paddingBottom: theme.spacing.xs,
      paddingTop: theme.spacing.xs,
    },
    tabBarActiveTintColor: theme.colors.onSecondaryContainer,
    tabBarInactiveTintColor: 'gray',
  },
}));

export default function RootLayout() {
  return (
    <UniTabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />,
        }}
      />
    </UniTabs>
  );
}
