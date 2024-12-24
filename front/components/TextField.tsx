interface TextFieldProps {
    label: string,
    labelFor: string,
    name: string,
    type?: string,
    placeholder: string,
    isPassword?: boolean,
    required?: boolean,
}

export default function TextField({ label, labelFor, name, placeholder, type = 'text', isPassword = false, required = false }:TextFieldProps) {
    return (
        <div >
            <label htmlFor={labelFor || name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                type={isPassword ? 'password' : type}
                name={name}
                id={name || `text-field-${Math.random().toString(36).substring(2, 15)}`}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};