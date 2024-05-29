import "../global.css";
export interface MonthPickerProps {
    selected: Date;
    onChange: (date: Date) => void;
    setIsOpen: (isOpen: boolean) => void;
    bgColorMonthActive?: string;
    bgColorMonthHover?: string;
    borderRadiusMonth?: string;
    bgColorPicker?: string;
    textColor?: string;
    size?: string;
    lang?: string;
}
export declare function MonthPicker(props: MonthPickerProps): import("react/jsx-runtime").JSX.Element;
