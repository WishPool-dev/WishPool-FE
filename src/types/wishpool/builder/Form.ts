export interface FormFieldProps {
  label: string;
  placeholder: string;
  maxLength: number;
  content?: string;
  setContent?: (value: string) => void;
}
