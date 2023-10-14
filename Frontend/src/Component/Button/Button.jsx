import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-green-500",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-md ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}