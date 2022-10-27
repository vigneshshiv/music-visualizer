/**
 * Icon Default Sizes
 */
const sizes = {
  xl: 'h-6 w-6',
  lg: 'h-5 w-5',
  md: 'h-4 w-4',
  sm: 'h-3 w-3'
};

type IconWithSizeClass = {
  sizeClass: string
};

export const withSize = (IconStyle: React.FC<IconWithSizeClass>) => {
  const component = ({ size = 'md' } : { size?: keyof typeof sizes }) => (
    <IconStyle sizeClass={sizes[size]} />
  );
  component.displayName = IconStyle.displayName;
  return component;
};