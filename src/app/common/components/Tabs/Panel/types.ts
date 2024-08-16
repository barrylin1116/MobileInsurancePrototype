export interface PanelProps {
  name: string;
  title: string;
  index?: number;
  onToggle?: (tabName: string) => void;
};
