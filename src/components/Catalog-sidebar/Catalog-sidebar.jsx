import React from 'react';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

export const CatalogSidebar =()=> {
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

    return (
    <aside className="catalog-sidebar flex-grow-1 d-flex flex-column w-100">
    {sidebarItems.map(
        (container, index) => (
        <div className="d-flex flex-column mx-5 mt-5" key={index}>
        {container.title}:
        {container.items.map(
            (item, index) => (
            <Label key={index}>
                <Input className="position-relative ml-0" type="checkbox"/>
                {' '}
                {item}
            </Label>))}
        </div>))}
    </aside>
    )
}