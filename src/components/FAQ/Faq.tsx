/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from "@headlessui/react";
import { FC, ReactElement, SVGProps } from "react";

interface Faq {
  question: string;
  answer: string;
}

const faqs = Array.from({ length: 5 }).map((_, idx) => ({
  question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  answer:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
}));

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Faq: FC = () => {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl py-10 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-5xl font-extrabold text-gray-900 ">
            Lorem Ipsum
          </h2>
          <p className="mt-4  text-center text-xl font-normal text-extendedBlue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
            sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
          </p>

          <dl className="mt-12  divide-y divide-white">
            {faqs.map((faq, idx) => (
              <Disclosure as="div" key={idx}>
                {({ open }) => (
                  <>
                    <dt className="text-lg ">
                      <Disclosure.Button className="flex w-full  items-center justify-between bg-gray-200  p-3 text-left ">
                        <span
                          className={classNames(
                            open ? "text-gray-900" : " text-extendedBlue",
                            "md:textlg text-sm font-medium"
                          )}
                        >
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform text-black"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel
                        as="dd"
                        className=" my-2  w-full bg-white"
                      >
                        <p className="w-full px-4 py-2 text-left text-xs font-light  text-extendedBlue md:text-base">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;

function ChevronDownIcon(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
