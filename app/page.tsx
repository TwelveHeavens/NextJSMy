import { Categories, Container, SortPopup, Title } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";



export default function Home() {
  return (
    <>
    <Container>
      <Title text='Все пиццы' size='lg' className="font-bold"/>
    </Container>
    <TopBar/>
    <Container className="flex">
      <Filters/>
      <div className="flex-1">
      <div className="flex flex-col gap-16">
        <ProductsGroupList title="Пиццы" items={[{
          id: 1,
          name: "Бургер-пицца",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.jpg",
          price: 550,
          items: [{price: 559}]
        },{
          id: 2,
          name: "Баварская",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/019591a2e222794a81731c99f3cc34ec.jpg",
          price: 550,
          items: [{price: 549}]
        },{
          id: 3,
          name: "Сырная",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.jpg",
          price: 550,
          items: [{price: 329}]
        },{
          id: 4,
          name: "Додо",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/019591a8006370038e0a9fb3e94925d1.jpg",
          price: 550,
          items: [{price: 829}]
        },{
          id: 5,
          name: "Карбонара",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/019591b13a1a724b90092c16d9b1c05a.jpg",
          price: 550,
          items: [{price: 659}]
        },{
          id: 6,
          name: "Аррива!",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/019591a0591d7642b97bf6ed6da45252.jpg",
          price: 550,
          items: [{price: 669}]
        }]} categoryId={1} />

        <ProductsGroupList title="Завтраки" items={[{
          id: 1,
          name: "Бургер-пицца",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.jpg",
          price: 550,
          items: [{price: 559}]
        },{
          id: 2,
          name: "Баварская",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/019591a2e222794a81731c99f3cc34ec.jpg",
          price: 550,
          items: [{price: 549}]
        },{
          id: 3,
          name: "Сырная",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.jpg",
          price: 550,
          items: [{price: 329}]
        },{
          id: 4,
          name: "Додо",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/019591a8006370038e0a9fb3e94925d1.jpg",
          price: 550,
          items: [{price: 829}]
        },{
          id: 5,
          name: "Карбонара",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/019591b13a1a724b90092c16d9b1c05a.jpg",
          price: 550,
          items: [{price: 659}]
        },{
          id: 6,
          name: "Аррива!",
          imageUrl: "https://media.dodostatic.net/image/r:292x292/019591a0591d7642b97bf6ed6da45252.jpg",
          price: 550,
          items: [{price: 669}]
        }]} categoryId={1} />
      </div>
    </div>
    </Container>
    </>
  );
}
