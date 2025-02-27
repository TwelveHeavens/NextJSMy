interface Props{
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <>
        <div>
            <FilterCheckbox value="1"/> 
            <FilterCheckbox value="2"/> 
        </div>
        </>
    );
}