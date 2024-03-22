import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type ButtonSize = 'small' | 'medium' | 'fluid' | 'fluid-small';
type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'ghost';
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'success'
  | 'info'
  | 'neutral';

interface ButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
  color: ButtonColor;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconOnly?: boolean;
  // @ts-ignore
  icon?: React.JSX.Element;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: any) => void;
  text: string;
  disabled?: boolean;
  customClass?: string;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  color = 'primary',
  variant = 'primary',
  iconLeft,
  iconRight,
  iconOnly = false,
  icon,
  text,
  onClick,
  disabled,
  customClass,
}) => {
  // Logic to handle iconOnly, to make iconLeft & iconRight not working if iconOnly activated/true
  if (iconOnly) {
    iconRight = undefined;
    iconLeft = undefined;
  }

  if (iconLeft || iconRight) {
    iconOnly = false;
  }

  // Tailwind CSS classes for styling the button
  const buttonStyle = twMerge(
    clsx(
      // Initial classes shared by all sizes and conditions
      ` inline-flex  items-center  justify-center  shadow-md  font-medium  transition  duration-300  rounded-[50px] ${customClass}`,

      // Classes for styling the padding, width, height of button depends on different condition, if iconOnly = false
      {
        ' px-4  py-2 ! font-bold  text-xs  w-max  h-[34px]':
          size === 'small' && !iconOnly,
        ' px-5  py-3 ! font-medium  text-sm  w-max  h-[44px]':
          size === 'medium' && !iconOnly,
        ' w-full ! font-bold  text-xs  px-4  py-2  h-[34px]':
          size === 'fluid-small' && !iconOnly,
        ' w-full  font-medium  text-sm  px-4  py-2  h-[44px]':
          size === 'fluid' && !iconOnly,
      },

      // Classes for styling the width, height of button depends on different condition, if iconOnly = true
      {
        ' h-[34px]  w-[34px]': iconOnly && size === 'small',
        ' h-[48px]  w-[48px]': iconOnly && size === 'medium',
      },
      {
        ' rounded-[50%]  px-[14px]  py-[14px]': icon && size === 'medium',
        ' rounded-[50%]  px-[10px]  py-[10px]': icon && size === 'small',
      },

      // Classes for styling the color of the button depends of different condition | variant = primary
      {
        'bg-default-primary  text-white hover:bg-default-primary-70  focus:bg-default-primary-80 disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'primary' && color === 'primary',
        'bg-default-secondary  text-white hover:bg-default-secondary-70  focus:bg-default-secondary-80 disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'primary' && color === 'secondary',
        'bg-default-warning  text-white hover:bg-default-warning-70  focus:bg-default-warning-80 disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'primary' && color === 'warning',
        'bg-default-success  text-white hover:bg-default-success-50  focus:bg-default-success-70 disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'primary' && color === 'success',
        'bg-default-info  text-white hover:bg-default-info-70  focus:bg-default-info-80 disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'primary' && color === 'info',
        // NOTE: neutral using different shades because it is mostly a light color, and the darker shades are too dark
        'bg-default-neutral  text-black hover:bg-default-neutral-30  focus:bg-default-neutral-50 disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'primary' && color === 'neutral',
      },

      // Classes for styling the color of the button depends of different condition | variant = secondary
      {
        'bg-default-primary-10  text-default-neutral-100 hover:bg-default-primary-30  focus:bg-default-primary-50  focus:text-white disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'secondary' && color === 'primary',
        'bg-default-secondary-20  text-default-neutral-100 hover:bg-default-secondary-30  focus:bg-default-secondary-50  focus:text-white disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'secondary' && color === 'secondary',
        'bg-default-warning-20  text-default-neutral-100 hover:bg-default-warning-30  focus:bg-default-warning-50  focus:text-white disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'secondary' && color === 'warning',
        'bg-default-success-20  text-default-neutral-100 hover:bg-default-success-30  focus:bg-default-success-50  focus:text-white disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'secondary' && color === 'success',
        'bg-default-info-20  text-default-neutral-100 hover:bg-default-info-30  focus:bg-default-info-50  focus:text-white disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'secondary' && color === 'info',
        // NOTE: neutral using different shades because it is mostly a light color, and the darker shades are too dark
        'bg-default-neutral-20  text-default-neutral-100 hover:bg-default-neutral-30  focus:bg-default-neutral-60  focus:text-neutral-100 disabled:bg-default-neutral-30 disabled:text-default-neutral-60':
          variant === 'secondary' && color === 'neutral',
      },

      // Classes for styling the color of the button depends of different condition | variant = outlined
      {
        'bg-transparent  text-default-primary  border  border-default-primary hover:bg-default-primary-10  focus:bg-default-primary-20 disabled:border disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'outlined' && color === 'primary',
        'bg-transparent  text-default-secondary  border  border-default-secondary hover:bg-default-secondary-10  focus:bg-default-secondary-20 disabled:border disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'outlined' && color === 'secondary',
        'bg-transparent  text-default-warning  border  border-default-warning hover:bg-default-warning-10  focus:bg-default-warning-20 disabled:border disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'outlined' && color === 'warning',
        'bg-transparent  text-default-success  border  border-default-success hover:bg-default-success-10  focus:bg-default-success-20 disabled:border disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'outlined' && color === 'success',
        'bg-transparent  text-default-info  border  border-default-info hover:bg-default-info-10  focus:bg-default-info-20 disabled:border disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'outlined' && color === 'info',
        'bg-transparent  text-default-neutral-100  border  border-default-neutral-100 hover:bg-default-neutral-20  focus:bg-default-neutral-50 disabled:border disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'outlined' && color === 'neutral',
      },

      // Classes for styling the color of the button depends of different condition | variant = ghost
      {
        'bg-transparent  text-default-primary-30  border  border-default-primary-30 hover:border-default-primary hover:text-default-primary  focus:border-default-primary-70  focus:text-default-primary-70 disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'ghost' && color === 'primary',
        'bg-transparent  text-default-secondary-30  border  border-default-secondary-30 hover:border-default-secondary hover:text-default-secondary  focus:border-default-secondary-70  focus:text-default-secondary-70 disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'ghost' && color === 'secondary',
        'bg-transparent  text-default-warning-30  border  border-default-warning-30 hover:border-default-warning hover:text-default-warning  focus:border-default-warning-70  focus:text-default-warning-70 disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'ghost' && color === 'warning',
        'bg-transparent  text-default-success-30  border  border-default-success-30 hover:border-default-success hover:text-default-success  focus:border-default-success-70  focus:text-default-success-70 disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'ghost' && color === 'success',
        'bg-transparent  text-default-info-30  border  border-default-info-30 hover:border-default-info hover:text-default-info  focus:border-default-info-70  focus:text-default-info-70 disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'ghost' && color === 'info',
        'bg-transparent  text-default-neutral-30  border  border-default-neutral-30 hover:border-default-neutral-60 hover:text-default-neutral-60  focus:border-default-neutral-100  focus:text-default-neutral-100 disabled:border-default-neutral-80 disabled:text-default-neutral-60 disabled:bg-transparent':
          variant === 'ghost' && color === 'neutral',
      }
    )
  );

  // Tailwind CSS classes for styling the icons
  const iconClasses = twMerge(
    clsx(
      {
        ' w-[14px]': size === 'small' || size === 'fluid-small',
        ' w-[20px]': size === 'medium' || size === 'fluid',
        ' w-[14px]  justify-center':
          (iconOnly && size === 'small') ||
          (iconOnly && size === 'fluid-small'),
        ' w-[20px]  justify-center':
          (iconOnly && size === 'medium') || (iconOnly && size === 'fluid'),
      },
      {
        ' w-[14px]  flex  mx-auto  ml-0  mr-0': icon,
        ' w-[20px]  flex  mx-auto  ml-0  mr-0': icon,
      },
      {
        ' ml-2':
          (iconRight && size === 'small') ||
          (iconRight && size === 'fluid-small'),
        ' mr-2':
          (iconLeft && size === 'small') ||
          (iconLeft && size === 'fluid-small'),
        ' ml-3':
          (iconRight && size === 'medium') || (iconRight && size === 'fluid'),
        ' mr-3':
          (iconLeft && size === 'medium') || (iconLeft && size === 'fluid'),
      }
    )
  );

  return (
    <button className={buttonStyle} disabled={disabled} onClick={onClick}>
      {iconLeft && <span className={iconClasses}>{icon}</span>}
      <span className="">
        <span className={`${iconOnly ? ' hidden' : ' block'}`}>{text}</span>
        {iconOnly && <span className={iconClasses}>{icon}</span>}
      </span>
      {iconRight && <span className={iconClasses}>{icon}</span>}
    </button>
  );
};
