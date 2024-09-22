import { Categories, Container, Filters, SortPopup, Title, TopBar } from '@/components/shared';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      {/* <div style={{ height: '3000px' }} /> */}
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/*Filtration*/}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/*Item List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Item List</div>
          </div>
        </div>
      </Container>
    </>
  );
}
