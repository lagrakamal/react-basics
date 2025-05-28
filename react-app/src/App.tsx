import { useState } from "react";
import Alert from "./componenets/Alert";
import Button from "./componenets/Button";
function App() {
  let [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert onClick={() => setAlertVisibility(false)}>
          click to make alert visible
        </Alert>
      )}
      <Button children="dynamic" onClose={() => setAlertVisibility(true)} />
    </div>
  );
}

export default App;
