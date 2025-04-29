import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

type Props = unknown;

export const DashboardScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          UnistylesRuntime.setTheme(UnistylesRuntime.themeName === 'dark' ? 'light' : 'dark')
        }>
        <Text style={styles.text}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    paddingTop: {
      sm: theme.spacing.sm,
      md: theme.spacing.md,
      lg: theme.spacing.lg,
    },
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
  text: {
    color: theme.colors.background,
  },
  currentThemeText: {
    color: theme.colors.onBackground,
    marginBottom: theme.spacing.sm,
  },
}));
