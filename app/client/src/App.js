import "./App.css"
import axios from "axios"
import FormSection from "./components/FormSection"
import Success from "./components/Success";
import { createRoot } from "react-dom/client";


function App() {

    const submitForm = async (data) => {
        await axios.post("http://localhost:1234/save", data);
        const root = createRoot(document.getElementById("main"))
        root.render(<Success />)
        setTimeout(() => {
            window.location.reload()
        }, 5000)
    }

    return (
        <>
            <div className="container-flush p-5">
                <div id="main" className="container bg-light rounded px-5">
                    <div className="text-center p-2">
                        <img id="logo" alt="logo" className="img-fluid w-25 p-2" src="./logo.d6990a66.png"></img>
                    </div>

                    <FormSection submitForm={submitForm} />
                </div>
            </div>
        </>
    );
}

export default App;
