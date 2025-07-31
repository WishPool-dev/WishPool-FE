// 'use client';

// import {
//   ChevronDownIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from 'lucide-react';
// import * as React from 'react';
// import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';

// import { Button, buttonVariants } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// function Calendar({
//   className,
//   classNames,
//   showOutsideDays = true,
//   captionLayout = 'dropdown',
//   buttonVariant = 'ghost',
//   formatters,
//   components,
//   ...props
// }: React.ComponentProps<typeof DayPicker> & {
//   buttonVariant?: React.ComponentProps<typeof Button>['variant'];
// }) {
//   const defaultClassNames = getDefaultClassNames();

//   return (
//     <DayPicker
//       showOutsideDays={showOutsideDays}
//       className={cn(
//         'bg-background-01 group/calendar p-3 [--cell-size:48px]', // ✅ 셀 크기 고정
//         className,
//       )}
//       captionLayout={captionLayout}
//       formatters={{
//         formatMonthDropdown: (date) =>
//           date.toLocaleString('default', { month: 'short' }),
//         ...formatters,
//       }}
//       classNames={{
//         root: cn('w-fit', defaultClassNames.root),
//         months: cn(
//           'flex gap-4 flex-col md:flex-row relative',
//           defaultClassNames.months,
//         ),
//         month: cn('flex flex-col w-full gap-4', defaultClassNames.month),
//         nav: cn(
//           'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between',
//           defaultClassNames.nav,
//         ),
//         button_previous: cn(
//           buttonVariants({ variant: buttonVariant }),
//           'w-10 h-10 p-0 select-none',
//           defaultClassNames.button_previous,
//         ),
//         button_next: cn(
//           buttonVariants({ variant: buttonVariant }),
//           'w-10 h-10 p-0 select-none',
//           defaultClassNames.button_next,
//         ),
//         month_caption: cn(
//           'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
//           defaultClassNames.month_caption,
//         ),
//         dropdowns: cn(
//           'w-full flex items-center justify-center gap-2 h-12 text-base ', // ✅ 높이/폰트 키움
//           defaultClassNames.dropdowns,
//         ),
//         dropdown_root: cn(
//           'relative border border-gray-300 rounded-md px-3 py-2  text-base', // ✅ padding, 폰트
//           defaultClassNames.dropdown_root,
//         ),
//         dropdown: cn(
//           'absolute inset-0 opacity-0 cursor-pointer', // ✅ 투명 select는 그대로, 커서만 보정
//           defaultClassNames.dropdown,
//         ),
//         caption_label: cn(
//           'select-none font-semibold text-xl', // ✅ 요일 텍스트 크기/굵기
//           defaultClassNames.caption_label,
//         ),
//         table: 'w-full border-collapse',
//         weekdays: cn('flex', defaultClassNames.weekdays),
//         weekday: cn(
//           'text-gray-600 rounded-md flex-1 font-normal text-xl select-none',
//           defaultClassNames.weekday,
//         ),
//         week: cn('flex w-full mt-2', defaultClassNames.week),
//         week_number_header: cn(
//           'select-none w-(--cell-size) text-[0.8rem]',
//           defaultClassNames.week_number_header,
//         ),
//         week_number: cn(
//           'text-[0.8rem] select-none text-gray-600',
//           defaultClassNames.week_number,
//         ),
//         day: cn(
//           'relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none',
//           defaultClassNames.day,
//         ),

//         today: cn(
//           'bg-[blue-6] rounded-md data-[selected=true]:rounded-none',
//           defaultClassNames.today,
//         ),
//         outside: cn(
//           'text-gray-600 aria-selected:text-gray-600',
//           defaultClassNames.outside,
//         ),
//         disabled: cn('text-gray-600 opacity-50', defaultClassNames.disabled),
//         hidden: cn('invisible', defaultClassNames.hidden),
//         ...classNames,
//       }}
//       components={{
//         Root: ({ className, rootRef, ...props }) => {
//           return (
//             <div
//               data-slot="calendar"
//               ref={rootRef}
//               className={cn(className)}
//               {...props}
//             />
//           );
//         },
//         Chevron: ({ className, orientation, ...props }) => {
//           if (orientation === 'left') {
//             return (
//               <ChevronLeftIcon className={cn('size-7', className)} {...props} />
//             );
//           }
//           if (orientation === 'right') {
//             return (
//               <ChevronRightIcon
//                 className={cn('size-7', className)}
//                 {...props}
//               />
//             );
//           }
//           return (
//             <ChevronDownIcon className={cn('size-7', className)} {...props} />
//           );
//         },
//         DayButton: CalendarDayButton,

//         ...components,
//       }}
//       {...props}
//     />
//   );
// }

// function CalendarDayButton({
//   className,
//   day,
//   modifiers,
//   ...props
// }: React.ComponentProps<typeof DayButton>) {
//   const defaultClassNames = getDefaultClassNames();
//   const ref = React.useRef<HTMLButtonElement>(null);

//   React.useEffect(() => {
//     if (modifiers.focused) ref.current?.focus();
//   }, [modifiers.focused]);

//   return (
//     <Button
//       ref={ref}
//       variant="ghost"
//       size="icon"
//       data-day={day.date.toLocaleDateString()}
//       data-selected-single={
//         modifiers.selected &&
//         !modifiers.range_start &&
//         !modifiers.range_end &&
//         !modifiers.range_middle
//       }
//       data-range-start={modifiers.range_start}
//       data-range-end={modifiers.range_end}
//       data-range-middle={modifiers.range_middle}
//       className={cn(
//         'data-[selected-single=true]:bg-blue-primary data-[range-middle=true]:bg-blue-6 data-[range-start=true]:bg-blue-primary data-[range-end=true]:bg-blue-primary group-data-[focused=true]/day:border-blue-primary group-data-[focused=true]/day:ring-blue-primary/50 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 !text-[1.4rem] leading-none font-medium group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:text-white data-[range-middle=true]:rounded-none data-[range-middle=true]:text-white data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:text-white data-[selected-single=true]:text-white',
//         defaultClassNames.day,
//         className,
//       )}
//       {...props}
//     />
//   );
// }

// export { Calendar, CalendarDayButton };
