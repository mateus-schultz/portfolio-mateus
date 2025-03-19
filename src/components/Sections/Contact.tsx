"use client";

import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters long" }),
  message: z
    .string()
    .min(3, { message: "Message must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
});

type FormType = z.infer<typeof schema>;

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    window.location.href = `mailto:mateusbrasil1994@hotmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
  };

  return (
    <div className="flex flex-col items-center space-y-10">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <motion.div
        className="flex flex-col text-center md:text-left max-w-7xl px-10 justify-evenly items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-col space-y-10">
          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">+55 (35) 9 9849-6105</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">Minas Gerais, Brazil</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">mateusbrasil1994@hotmail.com</p>
            </div>
          </div>

          <form
            className="flex flex-col space-y-2 w-fit mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-2">
              <div className="flex flex-col space-y-2">
                <input
                  className="contactInput"
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  className="contactInput"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <input
                className="contactInput"
                type="text"
                placeholder="Subject"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <textarea
                className="contactInput"
                placeholder="Message"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
