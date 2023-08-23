import { Icon, IconElement } from '@ui-kitten/components';

const PersonIcon = (props: any): IconElement => (
  <Icon {...props} name="person-outline" />
);

const CalendarIcon = (props: any): IconElement => (
  <Icon {...props} name="calendar-outline" />
);

const HomeIcon = (props: any): IconElement => (
  <Icon {...props} name="home-outline" />
);

export const iconOptions: Record<string, (props: any) => IconElement> = {
  Home: HomeIcon,
  Detail: CalendarIcon,
  Settings: PersonIcon,
};
