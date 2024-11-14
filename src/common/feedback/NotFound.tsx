import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center w-full">
        <p className="text-7xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900">
          {t("feedback.not_found.title")}
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-base">
          {t("feedback.not_found.description")}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t("feedback.not_found.go_back")}
          </a>
        </div>
      </div>
    </main>
  );
};
export default NotFound;
