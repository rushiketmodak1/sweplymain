
import React from "react";
export const InputComponent = (props) => {
    const {id, name, inputType, placeholder, labelName, value ,change, error, inputButton} = props;
    return (
        <div className="mb-4 w-full">
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                {labelName}
            </label>
            <div className="relative">
                <input id={id} type={inputType} name={name} placeholder={placeholder} value={value} onChange={(e) => change(e, id)} className="h-11 border rounded-lg px-3.5 border-gray-E0E3EB shadow-sm w-full" />
                {inputButton && <button className="absolute right-1 bg-sweply-blue-600 text-white font-semibold h-9 px-3 rounded-md top-0 bottom-0 m-auto">{inputButton}</button>}
            </div>
            {error && <p className="text-xs text-red-600 absolute">{error}</p>}
        </div>
    )
}

