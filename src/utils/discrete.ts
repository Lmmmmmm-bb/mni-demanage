import {
  darkTheme as naiveDarkTHeme,
  lightTheme as naiveLightTheme,
} from 'naive-ui';

export const createDiscrete = () => {
  const rootClass = document.documentElement.className;

  const isDark = rootClass.split(' ').includes('dark');

  const { notification } = createDiscreteApi(
    ['notification'],
    {
      configProviderProps: {
        theme: isDark ? naiveDarkTHeme : naiveLightTheme,
        themeOverrides: isDark ? darkTheme : lightTheme,
      },
    },
  );

  return { notification };
};
