// App.js
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";

export default function App() {
    return (
        <PayPalScriptProvider options={{clientId: "AWsd8KFicAi-ctem0EdSV331-iVVp3z9UONZ9DHpMfnmWo8WdfkCjRNX8Jq89pcKzH8Yz6jTx2tcP0vR"}}>
            <PayPalButtons style={{layout: "horizontal"}}/>
        </PayPalScriptProvider>
    );
}