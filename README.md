
# 🧠 React Basics

Dies ist mein persönliches Lernprojekt, um die Grundlagen von **React** Schritt für Schritt zu verstehen und zu üben.

## 📦 Setup

- React + TypeScript mit **Vite**
- **Bootstrap** installiert:

```bash
npm install bootstrap
```

- In `main.tsx` eingebunden:

```tsx
import 'bootstrap/dist/css/bootstrap.css';
```

- `index.css, main.css` entfernt

---

## 🧩 Erste Komponente: `Message.tsx`

```tsx
function Message() {
  return <h1>Hello World!</h1>;
}

export default Message;
```

### `App.tsx`:

```tsx
import Message from "./Message";

function App() {
  return <div><Message /></div>;
}

export default App;
```

---

## 🧩 ListGroup Komponente mit Bootstrap

### `ListGroup.tsx`:

```tsx
function ListGroup() {
  const items = ["Agadir", "Casablanca", "Rabat", "Mirleft", "Marrakech", "Tanger"];

  return (
    <>
      <h1>List Group title</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
```

### JSX Fragments (z. B. `<Fragment>` oder `<>`)

```tsx
import { Fragment } from "react";

return (
  <Fragment>
    <h1>List</h1>
    <p>No items found</p>
  </Fragment>
);
```

oder kürzer mit `<>`:

```tsx
<>
  <h1>List</h1>
  <p>No items found</p>
</>
```

---

## 🧩 Conditional Rendering

```tsx
if (items.length === 0)
  return (
    <>
      <h1>List</h1>
      <p>No items found</p>
    </>
  );
```

oder inline:

```tsx
{items.length === 0 && <p>No items found</p>}
{items.length === 0 ? <p>No items found</p> : null}
```

alternativ als Konstante:

```tsx
const message = items.length === 0 ? <p>No items found</p> : null;
{message}
```

oder als Funktion:

```tsx
function getMessage() {
  return items.length === 0 ? <p>No items found</p> : null;
}
{getMessage()}
```

---

## 🧩 Events & State

### Mit MouseEvent und onClick Handler

```tsx
import type { MouseEvent } from "react";

function ListGroup() {
  const handleClick = (event: MouseEvent) => console.log(event);
  ...
}
```

### selectedItem mit useState

```tsx
import { useState } from "react";

function ListGroup() {
  const [selectedItem, setSelectedItem] = useState(-1);
  ...
}
```

---

## 🧩 Props übergeben

### `ListGroup.tsx`:

```tsx
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
```

### `App.tsx`:

```tsx
import ListGroup from "./components/ListGroup";

function App() {
  const items = [...];
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
  );
}
```

---

## 🧩 Unterschied zwischen Props und State

- **Props** kommen von außen (Elternkomponenten)
- **State** ist intern (für interaktive, veränderliche Daten)

---

## 🧩 `Alert` Komponente

### Mit children:

```tsx
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};
```

### Mit Text:

```tsx
interface Props {
  text: string;
}

const Alert = (props: Props) => {
  return <div className="alert alert-primary">{props.text}</div>;
};
```

---

## 🧩 `Button` Komponente

### Mit Props + Click Event + Farbwahl:

```tsx
interface Props {
  children: string;
  color?: "primary" | "danger" | "success";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
```

---

## 🧩 Komponente sichtbar machen mit State

### `App.tsx`:

```tsx
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility && (
        <Alert onClick={() => setAlertVisibility(false)}>
          click to make alert visible
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>dynamic</Button>
    </div>
  );
}
```

---

## 🛠 React Developer Tools

Installiert und geübt mit dem Chrome DevTool Plugin. Hilfreich zum Debuggen und Überprüfen von Komponenten, Props und State.

---

## 📁 Projektstruktur (Beispiel)

```
src/
├── components/
│   ├── Alert.tsx
│   ├── Button.tsx
│   └── ListGroup.tsx
├── App.tsx
└── main.tsx
```

---



