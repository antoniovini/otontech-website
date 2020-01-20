const PrimaryColors = { default: 'hsl(209, 23%, 23%)', dark: 'hsl(209, 23%, 13%)', light: 'hsl(209, 23%, 53%)' };
const SecondaryColors = { default: 'hsl(224, 60%, 24%)' }
const DangerColors = { default: 'hsl(1, 80%, 61%)' }

export const Primary = (type = 'default') => PrimaryColors[type];
export const Secondary = (type = 'default') => SecondaryColors[type];
export const Danger = (type = 'default') => DangerColors[type];