import React, { useEffect, useState } from "react";
import { Button, Input, Switch, Textarea } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  getContactState,
  setInitialState,
} from "../../../store/app/contact/contact-slices";
import { submitContactForm } from "../../../store/app/contact/contact-thunk";
import LoadingIcon from "../../../assets/icons/LoadingIcon";
import { ContactFormData } from "../../../types/contact";

const ContactSection = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(getContactState);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    agreeToPolicies: false,
  });

  useEffect(() => {
    if (status.loading) return;

    if (status.code === 200) {
      alert("Your message has been sent successfully");
      dispatch(setInitialState());
    } else if (
      status.code !== 200 &&
      status.msg &&
      status.msg !== "slugError"
    ) {
      alert(status.msg);
      dispatch(setInitialState());
    }
  }, [dispatch, status.loading, status.code, status.msg]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.agreeToPolicies) {
      dispatch(submitContactForm(formData));
    } else {
      alert("You must agree to the privacy policy");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Contact Sales
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Please provide your details and we will get back to you shortly.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="full-name"
                className="block text-sm font-semibold text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2.5">
                <Input
                  type="text"
                  name="fullName"
                  id="full-name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full h-[3rem] rounded border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full h-[3rem] rounded border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <Input
                  type="tel"
                  name="phoneNumber"
                  id="phone-number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full h-[3rem] rounded border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <Textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full h-[6rem] rounded border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2 flex gap-x-4">
              <div className="flex h-6 items-center">
                <Switch
                  checked={formData.agreeToPolicies}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      agreeToPolicies: !formData.agreeToPolicies,
                    })
                  }
                  className="group inline-flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 data-[checked]:bg-indigo-600 shadow-sm ring-1 ring-gray-900/5 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
                >
                  <span className="sr-only">Agree to policies</span>
                  <span className="size-4 translate-x-0 rounded-full bg-white group-data-[checked]:translate-x-4 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out" />
                </Switch>
              </div>

              <label
                className="text-sm text-gray-600"
                htmlFor="agreeToPolicies"
              >
                By selecting this, you agree to our{" "}
                <Button className="font-semibold ml-2 text-indigo-600">
                  privacy policy
                </Button>
                .
              </label>
            </div>
          </div>

          <div className="mt-10">
            <Button
              type="submit"
              className="w-[10rem] h-[3rem] justify-center items-center flex flex-row rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
              disabled={status.loading}
            >
              {status.loading ? <LoadingIcon /> : <span>Let&apos;s Talk</span>}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
