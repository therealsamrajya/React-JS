import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const MyForm = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(" ~ file: MyForm.jsx ~ line15 ~ MyForm ~ values", values);
        action.resetForm();
      },
    });
  console.log(" ~ file: MyForm.jsx ~ line15 ~ MyForm ~ errors", errors);

  return (
    <form
      className="max-w-sm mx-auto lg:ml-5 border  text-primary font-palanquin mb-2"
      onSubmit={handleSubmit}>
      <div className="mb-5">
        <h1 className="font-bold ">SIGN UP!</h1>
        <label htmlFor="name" className="block mb-2 text-sm font-medium ">
          Name
        </label>
        <input
          type="name"
          id="name"
          name="name"
          placeholder="Name"
          autoComplete="off"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? (
          <p className="form-error">{errors.name}</p>
        ) : null}
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="username@gmail.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="form-error">{errors.email}</p>
        ) : null}
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="">
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className=" border border-gray-300 text-primary text-sm rounded-lg   block w-full p-2.5 dark:border-gray-600 "
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="form-error">{errors.password}</p>
        ) : null}
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border rounded "
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-primary">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-primary text-second mb-3">
        Submit
      </button>
    </form>
  );
};

export default MyForm;
