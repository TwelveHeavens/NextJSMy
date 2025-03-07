import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";

interface Props{
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <>
        <div className="flex flex-col gap-7">
            <Title text='Фильтрация' size="sm" className="font-bold"/>
            <div className="flex flex-col gap-4">
                <FilterCheckbox value="1" text={"Можно собирать"} /> 
                <FilterCheckbox value="2" text={"Новинки"}/> 
            </div>
            <div>
                <Title text="Цена от и до:" size="xs" className="font-bold"/>
                <div className="flex">
                    <input type="number"/>
                    <input type="number"/>
                </div>
            </div>
        </div>
        </>
    );
}