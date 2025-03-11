'use client';

import React from "react";
import { FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "postcss";

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    searchInputPlaceholder = 'Поиск...',
    className,
    onChange,
    defaultValue,
}) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }
    const list = showAll
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : defaultItems.slice(0,limit);
    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll &&(
                <div className="mb-5">
                    <Input
                        onChange = {onChangeSearchInput}
                        placeholder = {searchInputPlaceholder}
                        className = "bg-gray-50 border-none"
                    />
                </div>
            )}
        </div>
    )

}