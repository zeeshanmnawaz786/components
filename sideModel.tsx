"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function New() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="ml-3 flex h-7 items-center">
        <button
          type="button"
          aria-hidden="true"
          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
          onClick={() => setOpen(true)}
        >
          Update
        </button>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                        <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                          <h3 className="text-xl font-semibold dark:text-white">
                            Update Invoices
                          </h3>
                          <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                            data-modal-toggle="add-user-modal"
                            onClick={() => setOpen(false)}
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div className="p-6 space-y-6">
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="orderNo"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Order No
                                </label>
                                <input
                                  type="text"
                                  id="orderNo"
                                  name="orderNo"
                                  // defaultValue={singleUserData.orderNo}
                                  // ref={(e) => (inputRef.current["orderNo"] = e)}
                                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Bonnie"
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="customer"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Customer
                                </label>
                                <input
                                  type="text"
                                  name="customer"
                                  // defaultValue={singleUserData.customer}
                                  // ref={(e) =>
                                  //   (inputRef.current["customer"] = e)
                                  // }
                                  id="customer"
                                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Green"
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="contact"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Contact
                                </label>
                                <input
                                  type="text"
                                  name="contact"
                                  // defaultValue={singleUserData.contact}
                                  // ref={(el) =>
                                  //   (inputRef.current["contact"] = el)
                                  // }
                                  id="contact"
                                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="example@company.com"
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="purchaseOn"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Purchase On
                                </label>
                                <input
                                  type="date"
                                  name="purchaseOn"
                                  // defaultValue={singleUserData.purchaseOn}
                                  // ref={(el) =>
                                  //   (inputRef.current["purchaseOn"] = el)
                                  // }
                                  id="purchaseOn"
                                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="e.g. React developer"
                                />
                              </div>
                              <div className="col-span-6">
                                <label
                                  htmlFor="fundDetail"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Fund Detail
                                </label>
                                <textarea
                                  name="fundDetail"
                                  // defaultValue={singleUserData.fundDetail}
                                  // ref={(el) =>
                                  // (inputRef.current["fundDetail"] = el)
                                  // }
                                  id="fundDetail"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="enter some detail"
                                ></textarea>
                              </div>
                            </div>
                            <div className="items-center pt-6 pb-6 border-t border-gray-200 bgrounded-b dark:border-gray-700">
                              <button
                                // onClick={submitFunc}
                                className=" bg-slate-100  text-gray-900 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
