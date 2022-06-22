import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import errorIcon from "../../images/icon-error.svg";
const Newsletter = () => {
  const schema = yup.object({
    email: yup.string().email().required(),
  });

  const {
    register,
    formState: { errors },
    resetField,
    clearErrors,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = ({ email }) => {
    console.log(errors);
    resetField("email");
  };

  useEffect(() => {
    setTimeout(() => {
      clearErrors("email");
    }, 10000);
  }, [clearErrors, errors]);

  return (
    <section id='Newsletter' className='Newsletter'>
      <h2>35,000+ already joined</h2>
      <h1> Stay up-to-date with what we’re doing</h1>
      <form onSubmit={handleSubmit(submitHandler)} className='Newsletter_form'>
        <div className='w-full flex relative z-0 '>
          <ErrorMessage
            errors={errors}
            name='email'
            render={() => (
              <img
                className='absolute right-3 z-50 self-center'
                src={errorIcon}
                alt='error'
              />
            )}
          />
          <input type='email' {...register("email", { validate: true })} />

          <ErrorMessage
            errors={errors}
            name='email'
            render={({ message }) => <div className='error'>{message}</div>}
          />
        </div>

        <button> Contact Us</button>
      </form>
    </section>
  );
};

export default Newsletter;
