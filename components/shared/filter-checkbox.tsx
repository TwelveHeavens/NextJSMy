import React from 'react';
import { Checkbox } from '../ui/checkbox';
export interface FilterCheckboxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked
}) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
            onCheckedChange={onCheckedChange}/>
        </div>
    )
}