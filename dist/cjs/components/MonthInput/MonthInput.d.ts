import "../global.css";
export interface MonthInputProps {
    selected: {
        monthName: string;
        year: number;
    };
    lang?: string;
    size?: "small" | "large";
    bgColor?: string;
    bgColorHover?: string;
    textColor?: string;
    showMonthPicker: boolean;
    setShowMonthPicker: (show: boolean) => void;
}
export declare function MonthInput(props: MonthInputProps): import("react/jsx-runtime").JSX.Element;
export declare namespace MonthInput {
    var defaultProps: {
        lang: string;
        size: string;
    };
}
