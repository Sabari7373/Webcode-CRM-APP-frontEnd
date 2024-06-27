import React from 'react';
import { useFormik } from 'formik';

export default function Service() {
  const initialValues = {
    service: '',
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        
        <select
          id="service"
          name="service"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.service}
        >
          <option value="">Select a service</option>
          <option value="Created">Created</option>
          <option value="Open">Open</option>
          <option value="In process">In process</option>
          <option value="Released">Released</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
     
    </form>
  );
}
