export interface IInputTextField {
  id: string;
  defaultValue: string;
  children: any;
  handleChange(data: any): void;
}