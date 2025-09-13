import { useTheme } from '../context/ThemeContext';

/**
 * Custom hook to get the appropriate icon path based on the current theme
 * @param {string} iconName - The name of the icon file (without extension)
 * @returns {string} - The path to the icon in the public directory
 */
export const useThemeIcon = (iconName) => {
  const { theme } = useTheme();
  
  if (!iconName) return '';
  
  // If it's a theme-specific icon (in Dark/Light folders)
  if (iconName.includes('-svgrepo-com')) {
    const themeFolder = theme === 'dark' ? 'Dark' : 'Light';
    return `/${themeFolder}/${iconName}${iconName.endsWith('.svg') ? '' : '.svg'}`;
  }
  
  // For regular icons in the public root
  return `/${iconName}${iconName.endsWith('.svg') ? '' : '.svg'}`;
};
