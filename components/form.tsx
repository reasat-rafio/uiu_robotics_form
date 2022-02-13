import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormProps {
  username: string;
  email: string;
  password: string;
  con_password: string;
}

export const Form: React.FC<{}> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = async (data): Promise<void> => {
    try {
      const rawResponse = await fetch("/api/someWhere", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const content = await rawResponse.json();
      console.log(content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 space-y-1"
    >
      <div className="flex flex-col ">
        <div className="flex relative ">
          <span className="form_svgicon_block">
            <img src="/contact.svg" alt="contact icon" />
          </span>
          <input
            type="text"
            {...register("username", { required: true })}
            className="input_field"
            placeholder="User Name"
          />
        </div>
        {errors.username && (
          <span className="from_error_message">This field is required</span>
        )}
      </div>

      <div className="flex flex-col  ">
        <div className="flex relative ">
          <span className="form_svgicon_block">
            <img src="/mail.svg" alt="mail" />
          </span>
          <input
            type="text"
            {...register("email", { required: true })}
            className="input_field"
            placeholder="Your email"
          />
        </div>
        {errors.email && (
          <span className="from_error_message">This field is required</span>
        )}
      </div>

      <div className="flex flex-col ">
        <div className="flex relative ">
          <span className="form_svgicon_block">
            <img src="/unlock.svg" alt="unlock svg" />
          </span>
          <input
            {...register("password", { required: true })}
            type="password"
            className="input_field"
            placeholder="Your password"
          />
        </div>

        {errors.password && (
          <span className="from_error_message">This field is required</span>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex relative ">
          <span className="form_svgicon_block">
            <img src="/unlock.svg" alt="unlock svg" />
          </span>
          <input
            {...register("con_password", { required: true })}
            type="password"
            className="input_field"
            placeholder="Confirm password"
          />
        </div>

        {errors.con_password && (
          <span className="from_error_message">This field is required</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 p-3 rounded-md text-gray-100 font-semibold flex justify-center items-center gap-2"
      >
        <img src="/login.svg" /> <span> Sign Up</span>
      </button>
    </form>
  );
};
