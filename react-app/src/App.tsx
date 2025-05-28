import { useState } from "react";
import Alert from "./componenets/Alert";
import Button from "./componenets/Button";
function App() {
  let [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert onClick={() => setAlertVisibility(false)}>
          Alert!
        </Alert>
      )}
      <Button children="click to make alert visible" onClose={() => setAlertVisibility(true)} />
    </div>
  );
}

export default App;
