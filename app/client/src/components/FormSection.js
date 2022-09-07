import { useState } from 'react';
import { createRoot } from "react-dom/client"
import { Formik } from "formik";
import Inputs from './Inputs';
import UniOptions from "./UniOptions.js";



const FormSection = ({ submitForm }) => {

    const [eventNum, setEventNum] = useState(2);

    return (
        <Formik
            initialValues={{}}
            onSubmit={(data) => {
                console.log(data)
                submitForm(data)
            }}
        >

            {({ handleSubmit, handleChange, values }) => {


                return (

                    <form action="" onSubmit={handleSubmit}>
                        <div className="row">
                            <h4 className="mt-5">Etkinlik Bilgi Formu</h4>
                            <div className="form-floating col-lg-6 p-1">

                                <select onChange={handleChange} className="form-select" name="university" id="university" required >
                                    <option value="-1" disabled>Seçiniz </option>
                                    <UniOptions />
                                    <option value="diger">Diğer </option>
                                </select>
                                <label htmlFor="university" >Üniversite Seçiniz</label>

                            </div>
                            <div className="form-floating mb-3 col p-1">
                                <input onChange={handleChange} name="club_name" className="form-control" id="club_name" type="text" placeholder="." required />
                                <label htmlFor="club_name">Kulüp Adı</label>
                            </div>
                        </div>
                        <span className="m-0 p-0" id="inputRoot">
                            <span className='m-0 p-0'>
                                <Inputs values={values} handleChange={handleChange} eventNum="1" />
                            </span>
                        </span>
                        <button className="btn btn-primary btn-lg mb-3 d-block" id="submitButton" type="button" onClick={
                            () => {
                                const root = document.getElementById("inputRoot")
                                const x = document.createElement("span")
                                x.className = "m-0 p-0"
                                root.appendChild(x)
                                const newOne = createRoot(x);
                                newOne.render(
                                    <Inputs values={values} handleChange={handleChange} eventNum={eventNum} />
                                )
                                setEventNum(eventNum + 1)
                            }
                        }>Etkinlik Ekle  +</button>
                        <button className="w-100 btn btn-primary btn-lg mb-3" id="submitButton" type="submit">Submit</button>
                    </form>

                )
            }}

        </Formik>
    );
};


export default FormSection;
