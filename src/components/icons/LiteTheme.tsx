/**
 * Lite Theme
 */
import cn from 'classnames';
import { withSize } from './IconStyle'

export const LiteTheme = withSize(({ sizeClass }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={cn(sizeClass, 'text-gray-800 dark:text-gray-200')}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
));