import React, { useState } from "react";
import { Button, Input, Switch, Textarea } from "@headlessui/react";

const ContactSection = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <section id="contact" className="py-24">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Contact sales
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form
          action="#"
          method="POST"
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
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full h-[2.5rem] rounded border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
                  autoComplete="email"
                  className="block w-full h-[2.5rem] rounded border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded border-0 bg-transparent bg-none py-0 pl-4 pr-1 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>BG</option>
                    <option>US</option>
                    <option>EU</option>
                  </select>
                </div>
                <Input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  className="block w-full h-[2.5rem] rounded border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
                  className="block w-full scrollbar min-h-[4rem] max-h-[16rem] rounded border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className="group inline-flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 data-[checked]:bg-indigo-600  shadow-sm ring-1 ring-gray-900/5 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
                >
                  <span className="sr-only">Agree to policies</span>
                  <span className="size-4 translate-x-0 rounded-full bg-white group-data-[checked]:translate-x-4  shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out" />
                </Switch>
              </div>
              <label
                className="text-sm text-gray-600"
                htmlFor="agree-to-policies"
              >
                By selecting this, you agree to our
                <Button className="font-semibold ml-2 text-indigo-600">
                  privacy&nbsp;policy
                </Button>
                .
              </label>
            </div>
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              className="block w-[10rem] rounded bg-indigo-600 px-3.5 h-[2.5rem] text-center text-sm font-semibold hover:text-white text-gray-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let&apos;s talk
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
