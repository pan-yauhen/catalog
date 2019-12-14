import React from 'react';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import * as R from 'ramda';

export const CatalogSidebar =({filtersList, addFilter})=> {
    const sidebarItems = [
        {
          title: 'Модель',
          items: ['Sport', 'Casual', 'Классика'],
        },
        {
          title: 'Материалы',
          items: ['Кожа', 'Мех', 'Искусственная', 'Замша'],
        },
      ]

    function onChange ({currentTarget: { checked, dataset: { item }}}) {
      let newFiltersList = filtersList;

      if(filtersList.includes(item)) {
        if(!checked) {
          newFiltersList = R.without(item, filtersList);
        }
      } else {
        if(checked) {
          newFiltersList = R.append(item, filtersList)
        }
      }
      addFilter(newFiltersList);
    }

    return (
    <aside className="catalog-sidebar d-flex flex-column">
    {sidebarItems.map(
        (container, index) => (
        <div className="d-flex flex-column mx-5 mt-5" key={index}>
        {container.title}:
        {container.items.map(
            (item, index) => (
            <Label key={index}>
                <Input className="position-relative ml-0" data-item={item} type="checkbox" onChange={onChange}/>
                {' '}
                {item}
            </Label>))}
        </div>))}
    </aside>
    )
}