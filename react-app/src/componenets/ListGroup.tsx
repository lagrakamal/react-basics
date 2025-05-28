import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  let [selectedItem, selectedItemUpdater] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no items found</p>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={
                selectedItem === index
                  ? `list-group-item active`
                  : `list-group-item`
              }
              onClick={() => {
                selectedItemUpdater(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
