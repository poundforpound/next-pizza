import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />
      {/*Checkbox filter */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Could Compile" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>
      {/*Price filter*/}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={100} max={30000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      {/*Ingredient filter*/}
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Cheese souse',
            value: '1',
          },
          {
            text: 'Mozzarella',
            value: '2',
          },
          {
            text: 'Garlik',
            value: '3',
          },
          {
            text: 'Solt cucumbers',
            value: '4',
          },
          {
            text: 'Red onion',
            value: '5',
          },
          {
            text: 'Tomatoes',
            value: '6',
          },
        ]}
        items={[
          {
            text: 'Cheese souse',
            value: '1',
          },
          {
            text: 'Mozzarella',
            value: '2',
          },
          {
            text: 'Garlik',
            value: '3',
          },
          {
            text: 'Solt cucumbers',
            value: '4',
          },
          {
            text: 'Red onion',
            value: '5',
          },
          {
            text: 'Tomatoes',
            value: '6',
          },
          {
            text: 'Cheese souse',
            value: '1',
          },
          {
            text: 'Mozzarella',
            value: '2',
          },
          {
            text: 'Garlik',
            value: '3',
          },
          {
            text: 'Solt cucumbers',
            value: '4',
          },
          {
            text: 'Red onion',
            value: '5',
          },
          {
            text: 'Tomatoes',
            value: '6',
          },
        ]}
      />
    </div>
  );
};
