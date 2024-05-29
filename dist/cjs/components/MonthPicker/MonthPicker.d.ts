import "../global.css";
export interface MonthPickerProps {
    selected: {
        month: number;
        year: number;
    };
    onChange: (date: {
        month: number;
        year: number;
        monthName: string;
        monthShortName: string;
    }) => void;
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
