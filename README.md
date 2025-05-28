
# 🧪 React Basics – Step-by-Step Learning Log

Schritt für Schritt zu verstehen und zu üben.

## 📦 Projekt Setup

### 1. Bootstrap einrichten
- `index.css, main.css` gelöscht.
- Bootstrap installiert.
- In `main.tsx` eingebunden:

```tsx
import 'bootstrap/dist/css/bootstrap.css';
```

---

## 2. 🟢 Erste Komponente: `Message.tsx`

```tsx
function Message() {
  return <h1>Hello World!</h1>;
}

export default Message;
```

### In `App.tsx` integriert:

```tsx
import Message from "./Message";

function App() {
  return <div><Message /></div>;
}

export default App;
```

---

## 3. 📁 Komponentenordner & ListGroup erstellt

### Bootstrap HTML kopiert & umgewandelt:

```tsx
<ul className="list-group">
  <li className="list-group-item">Agadir</li>
  ...
</ul>
```

---

## 4. 🌐 Dynamische Liste mit `items`-Array

```tsx
const items = ["Agadir", "Casablanca", "Rabat", "Mirleft", "Marrakech", "Tanger"];
```

### JSX Fragments
- Lernen von `<></>` oder `React.Fragment`
- Beispiel:

```tsx
<>
  <h1>List Group</h1>
  <ul className="list-group">...</ul>
</>
```

---

## 5. 🎨 Farben mit Bootstrap dynamisch

```tsx
const colors = ["primary", "secondary", "success", ...];

<a className={\`list-group-item list-group-item-${colorClass}\`}>{item}</a>
```

---

## 6. 🔁 Conditional Rendering

### Beispiele:

```tsx
if (items.length === 0)
  return (
    <>
      <h1>List</h1>
      <p>No items found</p>
    </>
  );
```

oder kürzer:

```tsx
items.length === 0 && <p>No items found</p>;
```

oder mit `message` Variable:

```tsx
const message = items.length === 0 ? <p>No items found</p> : null;
{message}
```

---

## 7. 💡 Wiederverwendbare Logik als Funktion

```tsx
function renderMessage(items: string[]) {
  return items.length === 0 ? <p>No items found</p> : null;
}
```

---

## 8. 🖱️ Events mit MouseEvent

```tsx
import type { MouseEvent } from "react";

const handleClick = (event: MouseEvent) => console.log(event);
```

---

## 9. 🔵 Selected Item

```tsx
let selectedItem = 0;

<li
  className={selectedItem === index ? "list-group-item active" : "list-group-item"}
  onClick={handleClick}
>
  {item}
</li>
```

---

## 10. 🧠 useState-Hook

```tsx
let [selectedItem, setSelectedItem] = useState(-1);

onClick={() => setSelectedItem(index)}
```

---

## 11. 🔼 Props nutzen für Wiederverwendung

### `ListGroup.tsx`

```tsx
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) { ... }
```

### `App.tsx`

```tsx
<ListGroup items={items} heading="Cities" />
```

---

## 12. 🧩 Events via Props nach oben reichen

### Erweiterung mit `onSelectItem`

```tsx
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
```

```tsx
onClick={() => {
  setSelectedItem(index);
  onSelectItem(item);
}}
```

---

## 13. 🧬 Unterschied zwischen Props und State

- **Props**: Werden vom Elternkomponent übergeben, sind **read-only**.
- **State**: Interner Zustand des Komponenten, wird durch Hooks wie `useState` verwaltet.

---

## 14. 🛎️ Alert Komponente

### `rafce` Snippet genutzt

```tsx
interface Props {
  text: string;
}

const Alert = (props: Props) => {
  return <div className="alert alert-primary">{props.text}</div>;
};
```

Oder mit `children`:

```tsx
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};
```

---

## 15. 🧪 React Developer Tools

React DevTools installiert und zur Analyse von Komponenten, State und Props genutzt.

---

## 16. 🔘 Button Komponente mit Props

```tsx
interface Props {
  children: string;
  color?: "primary" | "danger" | "success";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
```

---

## 17. 🔁 Sichtbarkeit von Alert togglen

```tsx
const [alertVisibility, setAlertVisibility] = useState(false);

{alertVisibility && (
  <Alert onClick={() => setAlertVisibility(false)}>
    click to make alert visible
  </Alert>
)}

<Button onClick={() => setAlertVisibility(true)}>dynamic</Button>
```

---



