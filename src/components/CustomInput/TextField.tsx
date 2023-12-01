import { FC, InputHTMLAttributes, forwardRef } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const TextField: FC<TextFieldProps> = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ label,
        onChange,
        ...otherProps },
        ref: React.ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <div className='my-2'>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type={otherProps.type}
                    {...otherProps}
                    ref={ref}
                />
            </div>
        )
    });
