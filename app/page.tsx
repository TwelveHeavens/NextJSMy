import { Categories, Container, SortPopup, Title } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { TopBar } from "@/components/shared/top-bar";



export default function Home() {
  return (
    <>
    <Container>
      <Title text='Все пиццы' size='lg' className="font-bold"/>
    </Container>
    <TopBar/>
    <Container>
      <Filters/>
    </Container>
    {/* список товаров */}
    <div className="flex-1">
      <div className="flex flex-col gap-16">
        <ProductCard id={0}
        name="Чизбургер-пицца"
        price={550}
        imageUrl=""/>
      </div>
    </div>
    </>
  );
}
