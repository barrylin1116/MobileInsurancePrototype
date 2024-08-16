export interface UseDebounceFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  wait?: number;
}
