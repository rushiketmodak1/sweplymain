import React from "react";
export const BlueButton = (props) => {
    const {name} = props;
    return (
        <button type="submit" className="flex w-full items-center justify-center rounded-lg h-11 text-base font-semibold text-white shadow-sm mt-8 bgSweplyBlue">{name}</button>
    )
}

