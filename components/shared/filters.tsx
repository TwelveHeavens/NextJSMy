import { CheckboxFiltersGroup } from "./checkbox-filters-group";
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
                <FilterCheckbox value="1" text={"Можно собирать"}/> 
                <FilterCheckbox value="2" text={"Новинки"}/> 
            </div>
            <div className="mt-5 border-y border-neutral-100 py-6 pb-7">
                <Title text="Цена от и до:" size="xs" className="font-bold"/>
                <div className="flex">
                    <input type="number" placeholder="0" min={0} max={5000} defaultValue={0}/>
                    <input type="number" placeholder="5000" min={100} max={5000}/>
                </div>
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Ингредиенды"
                limit={6}
                defaultItems={[
                    {
                        text:'Сырный соус',
                        value:'1',
                    },
                    {
                        text:'Моццарелла',
                        value:'2',
                    },
                    {
                        text:'Чеснок',
                        value:'3',
                    },
                ]}
                items={[
                    {
                        text:'Сырный соус',
                        value:'1',
                    },
                    {
                        text:'Моццарелла',
                        value:'2',
                    },
                    {
                        text:'Солённые огурчики',
                        value:'3',
                    },
                    {
                        text:'Красный лук',
                        value:'4',
                    },
                    {
                        text:'Грибы',
                        value:'5',
                    },
                    {
                        text:'Томаты',
                        value:'6',
                    },
                ]}
                />
        </div>
        </>
    );
}