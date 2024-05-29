import * as react_jsx_runtime from 'react/jsx-runtime';

interface MonthPickerProps {
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
declare function MonthPicker(props: MonthPickerProps): react_jsx_runtime.JSX.Element;

interface MonthInputProps {
    selected: Date;
    lang?: string;
    size?: "small" | "large";
    bgColor?: string;
    bgColorHover?: string;
    textColor?: string;
    showMonthPicker: boolean;
    setShowMonthPicker: (show: boolean) => void;
}
declare function MonthInput(props: MonthInputProps): react_jsx_runtime.JSX.Element;
declare namespace MonthInput {
    var defaultProps: {
        lang: string;
        size: string;
    };
}

export { MonthInput, MonthPicker };
