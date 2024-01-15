import { Datepicker } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

interface Props {
  onChangeDatepicker: (selectedDate: any) => void;
}

const customTheme: CustomFlowbiteTheme = {
  datepicker: {
    root: {
      base: "relative",
    },
    popup: {
      root: {
        base: "absolute top-10 z-50 block pt-2",
        inline: "relative top-0 z-auto",
        inner: "inline-block rounded-lg p-4 shadow-lg bg-monochrome-700",
      },
      header: {
        base: "",
        title:
          "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
        selectors: {
          base: "flex justify-between mb-2",
          button: {
            base: "text-sm rounded-lg text-white bg-monochrome-700 dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
            prev: "",
            next: "",
            view: "",
          },
        },
      },
      view: {
        base: "p-1",
      },
      footer: {
        base: "flex mt-2 space-x-2",
        button: {
          base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-red-300",
          today:
            "bg-red-700 text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
          clear:
            "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        },
      },
    },
    views: {
      days: {
        header: {
          base: "grid grid-cols-7 mb-1",
          title: "dow h-6 text-center text-sm font-medium leading-6 text-white",
        },
        items: {
          base: "grid w-64 grid-cols-7",
          item: {
            base: "block flex-1 cursor-pointer rounded-3xl border-0 text-center text-sm font-semibold leading-9 text-gray-500 hover:bg-gray-100",
            selected: "bg-red-700 text-white hover:bg-red-600",
            disabled: "text-gray-500",
          },
        },
      },
      months: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 text-white hover:bg-gray-600",
            selected: "bg-red-700 text-white hover:bg-red-600",
            disabled: "text-gray-500",
          },
        },
      },
      years: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 text-white hover:bg-gray-600 text-white",
            selected: "bg-red-700 text-white hover:bg-red-600",
            disabled: "text-gray-500",
          },
        },
      },
      decades: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
            selected: "bg-red-700 text-white hover:bg-red-600",
            disabled: "text-gray-500",
          },
        },
      },
    },
  },
};

const DatepickerCallendar: React.FC<Props> = ({ onChangeDatepicker }) => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Datepicker
        inline
        onSelectedDateChanged={onChangeDatepicker}
        language="id-ID"
        showClearButton={false}
        showTodayButton={false}
      />
    </Flowbite>
  );
};

export default DatepickerCallendar;
