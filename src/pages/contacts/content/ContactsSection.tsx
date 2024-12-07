/* eslint-disable no-alert */
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button, Input, Switch, Textarea } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { submitContactForm } from "../../../store/app/contact/contact-thunk";
import { ContactFormData } from "../../../types/contact";
import {
  getContactState,
  setInitialState,
} from "../../../store/app/contact/contact-slices";
import Map from "./Map";
import LoadingIcon from "../../../assets/icons/LoadingIcon";

const ContactsSection = () => {
  const { t } = useTranslation();

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
      alert(t("contact.alertSuccess"));
      dispatch(setInitialState());
    } else if (
      status.code !== 200 &&
      status.msg &&
      status.msg !== "slugError"
    ) {
      alert(status.msg);
      dispatch(setInitialState());
    }
  }, [dispatch, status.loading, status.code, status.msg, t]);

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
      alert(t("contact.alertError"));
    }
  };

  return (
    <div className="lg:container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <section id="contact" className="isolate bg-white">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {t("contact.contactTitle")}
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              {t("contact.contactSubtitle")}
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-4 md:container flex flex-col w-full"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="full-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  {t("contact.fullName")}
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
                  {t("contact.email")}
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
                  {t("contact.phoneNumber")}
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
                  {t("contact.message")}
                </label>
                <div className="mt-2.5">
                  <Textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full min-h-[10rem] max-h-[18rem] rounded border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 flex gap-x-2 items-center">
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
                    <span className="sr-only">
                      {t("contact.agreeToPolicies")}
                    </span>
                    <span className="size-4 translate-x-0 rounded-full bg-white group-data-[checked]:translate-x-4 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out" />
                  </Switch>
                </div>

                <label
                  className="text-sm text-gray-600"
                  htmlFor="agreeToPolicies"
                >
                  <Trans
                    i18nKey="contact.agreeToPolicies"
                    components={{
                      link: (
                        <a href="/privacy" className="underline text-[#4F45E4]">
                          <Trans i18nKey="contact.privacyPolicyLink" />
                        </a>
                      ),
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="mt-6">
              <Button
                type="submit"
                disabled={status.loading}
                className="group h-[3rem] inline-flex w-full items-center justify-center gap-x-2 rounded border border-transparent bg-indigo-600 px-4 py-2 text-base text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-indigo-400"
              >
                {status.loading ? <LoadingIcon /> : t("contact.submitButton")}
              </Button>
            </div>
          </form>
        </section>

        {/* Map Section */}
        <section className="bg-white rounded shadow-md overflow-hidden h-[40rem] my-auto">
          <Map />
        </section>
      </div>
    </div>
  );
};

export default ContactsSection;
