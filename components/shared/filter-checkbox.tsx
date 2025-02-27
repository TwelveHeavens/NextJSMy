import React from 'react';
import { Checkbox } from '@radix-ui/react-checkbox';
export interface FilterCheckboxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}