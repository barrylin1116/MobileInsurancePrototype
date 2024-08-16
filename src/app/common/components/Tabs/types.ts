import Panel from './Panel';

export interface TabsProps {
  defaultActiveIndex?: number;
  navsVisible?: boolean;
}

export interface TabsChildComponents {
  Panel: typeof Panel;
};

export interface TabsContextValues {
  activeIndex: number;
}
