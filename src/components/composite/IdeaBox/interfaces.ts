export interface IdeaBoxProps {
  headerText: string;
  subHeaderText: string;
  defaultTextValue: string;
  buttonLabel: string;
  // style: React.CSSProperties;
  onClick?: () => void;
}