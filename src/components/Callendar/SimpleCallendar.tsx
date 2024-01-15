import { IconArrowLeft, IconArrowRight } from "../icons";

function SimpleCallendar() {
  return (
    <div className="p-3 bg-monochrome-700 rounded-lg">
      <div className="flex justify-between items-center">
        <IconArrowLeft />
        <label className="text-monochrome-200 font-bold text-sm">
          January 2022
        </label>
        <IconArrowRight />
      </div>
      <hr className="text-monochrome-500 border-t-2 border-monochrome-500 my-4" />
      <div className="flex items-center justify-between overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>
                <div className="w-full flex justify-center">
                  <p className="text-xs font-medium text-center  dark:text-gray-100">
                    Sen
                  </p>
                </div>
              </th>
              <th>
                <div className="w-full flex justify-center">
                  <p className="text-xs font-medium text-center  dark:text-gray-100">
                    Sel
                  </p>
                </div>
              </th>
              <th>
                <div className="w-full flex justify-center">
                  <p className="text-xs font-medium text-center  dark:text-gray-100">
                    Rab
                  </p>
                </div>
              </th>
              <th>
                <div className="w-full flex justify-center">
                  <p className="text-xs font-medium text-center  dark:text-gray-100">
                    Kam
                  </p>
                </div>
              </th>
              <th>
                <div className="w-full flex justify-center">
                  <p className="text-xs font-medium text-center  dark:text-gray-100">
                    Jum
                  </p>
                </div>
              </th>
              <th>
                <div className="w-full flex justify-center">
                  <p className="text-xs font-medium text-center  dark:text-gray-100">
                    Sab
                  </p>
                </div>
              </th>
              <th>
                <div className="w-full flex justify-center">
                  <p className="text-xs font-medium text-center  dark:text-gray-100">
                    Min
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pt-6">
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
              </td>
              <td className="pt-6">
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
              </td>
              <td className="pt-6">
                <div className="w-full h-full">
                  <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                    <a
                      role="link"
                      tabIndex={0}
                      className="underline decoration-dotted focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:bg-red-500 hover:bg-red-600 text-xs w-8 h-8 flex items-center justify-center font-medium text-white bg-red-600 rounded-full"
                    >
                      1
                    </a>
                  </div>
                </div>
              </td>
              <td className="pt-6">
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    2
                  </p>
                </div>
              </td>
              <td className="pt-6">
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100">3</p>
                </div>
              </td>
              <td className="pt-6">
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100">4</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    5
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    6
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    7
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    8
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    9
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100">10</p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100">11</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    12
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    13
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    14
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    15
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    16
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100">17</p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100">18</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    19
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    20
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    21
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    22
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    23
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100">24</p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100">25</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    26
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    27
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    28
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    29
                  </p>
                </div>
              </td>
              <td>
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                  <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">
                    30
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SimpleCallendar;
