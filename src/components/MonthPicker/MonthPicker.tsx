import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./MonthPicker.module.css";
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

export function MonthPicker(props: MonthPickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const displayedMonthIndex = new Date(
    props.selected || selectedDate
  ).getMonth();
  const displayedYear = new Date(props.selected || selectedDate).getFullYear();

  const setActiveMonthBgColor = (r: HTMLElement, color: string) => {
    r.style.setProperty("--month-active-bg-color", color);
  };

  useEffect(() => {
    const r = document.querySelector<HTMLElement>(":root");
    if (!r) {
      return;
    }
    if (props.bgColorMonthActive) {
      setActiveMonthBgColor(r, props.bgColorMonthActive);
    }
    if (props.bgColorMonthHover) {
      r.style.setProperty("--month-hover-bg-color", props.bgColorMonthHover);
    }
    if (props.borderRadiusMonth) {
      r.style.setProperty("--month-border-radius", props.borderRadiusMonth);
    }
    if (props.bgColorPicker) {
      r.style.setProperty("--picker-bg-color", props.bgColorPicker);
    }
    if (props.textColor) {
      r.style.setProperty("--text-color", props.textColor);
    }
    if (props.size == "small") {
      r.style.setProperty("--picker-padding", "1rem");
      r.style.setProperty("--year-display-margin-top", "0.5rem");
      r.style.setProperty("--year-display-margin-bottom", "0.5rem");
      r.style.setProperty("--month-select-padding", "0.5rem");
    }
  }, []);

  const changeYear = (year: number) => {
    setSelectedDate(new Date(year, displayedMonthIndex, 1));
  };

  const getMonthNames = (
    locale = "en",
    format: "numeric" | "2-digit" | "long" | "short" | "narrow" = "short"
  ) => {
    const formatter = new Intl.DateTimeFormat(locale, {
      month: format,
      timeZone: "UTC",
    });
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
      const mm = month < 10 ? `0${month}` : month;
      const yyyy = new Date().getFullYear();
      return new Date(`${yyyy}-${mm}-01T00:00:00+00:00`);
    });
    return months.map((date) => formatter.format(date));
  };

  const changeMonth = (month: number) => {
    setSelectedDate(new Date(displayedYear, month, 1));
    props.onChange(new Date(displayedYear, month, 1));
    props.setIsOpen(false);
  };

  return (
    <div className={styles.pickerContainer}>
      <div className={styles.yearContainer}>
        <button
          className={styles.button}
          aria-label="Previous Year"
          onClick={(e) => changeYear(displayedYear - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={props.textColor ? props.textColor : "#000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <span aria-description="Year selected" className={styles.bold1}>
          {displayedYear}
        </span>
        <button
          className={styles.button}
          aria-label="Next Year"
          onClick={(e) => changeYear(displayedYear + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={props.textColor ? props.textColor : "#000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className={styles.monthsContainer}>
        {getMonthNames(props.lang).map((monthName, index) => {
          return (
            <button
              key={index}
              className={`${styles.month} ${styles.button} ${
                index == displayedMonthIndex &&
                displayedYear == new Date().getFullYear()
                  ? styles.active
                  : null
              }`}
              onClick={(e) => changeMonth(index)}
            >
              {monthName}
            </button>
          );
        })}
      </div>
    </div>
  );
}
