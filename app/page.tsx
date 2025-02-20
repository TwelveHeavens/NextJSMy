import { Categories, Container, Title } from "@/components/shared";



export default function Home() {
  return (
    <>
    <Container>
      <Title text='Все пиццы' size='lg' className="font-bold"/>
    </Container>
    <Container>
      <Categories/>
    </Container>
    
    </>
  );
}
