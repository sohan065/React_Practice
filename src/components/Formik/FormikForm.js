import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
export default function FormikForm() {
    const [numbers, setNumber] = useState();

    const formik = useFormik({
        initialValues: {
            firstNumber: 0,
            secondNumber: 0
        },
        // validationSchema: yup.object({
        //     name: yup.string().min(2, 'minimum 2 charecter needed').required()
        // }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: '' });
        }
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>1st Number:</label>
                    <input type="text" name="firstNumber" id="firstNumber" value={formik.values.firstNumber} onChange={formik.handleChange} />
                    <br></br>
                </div>
                <div>
                    <label>2nd number:</label>
                    <input type="text" name="secondNumber" id="secondNumber" value={formik.values.secondNumber} onChange={formik.handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
