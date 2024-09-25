import {
  Categories,
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  SortPopup,
  Title,
  TopBar,
} from '@/components/shared';
import { Try } from '@/components/shared/try';
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
        <div className="flex gap-[80px]">
          {/*Filtration*/}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/*Item List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Breakfast"
                items={[
                  {
                    id: 1,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
