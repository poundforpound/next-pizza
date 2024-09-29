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
                categoryId={1}
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
                    id: 2,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Breakfast"
                categoryId={8}
                items={[
                  {
                    id: 9,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: 'Cheesburger pizza',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
