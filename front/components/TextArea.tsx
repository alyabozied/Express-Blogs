interface TextFieldProps {
    label: string,
    labelFor: string,
    name: string,
    type?: string,
    placeholder: string,
    isPassword?: boolean,
    required?: boolean,
    value?:string
}

export default function TextArea({ label, labelFor, name, placeholder ,value}:TextFieldProps) {
    return (
        <div >
            <label htmlFor={labelFor || name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <textarea 
                rows={15}
                cols={100}
                name={name}
                id={name || `text-field-${Math.random().toString(36).substring(2, 15)}`}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                defaultValue={value}
            />
        </div>
    );
};


