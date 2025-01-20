"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Flexible Solutions for Every Budget`,
                description: `We understand that every project is unique. That's why we offer a variety of flexible pricing options to fit your specific needs and budget. Whether you require a simple website or a more complex solution, we have a plan that's right for you. Contact us today to discuss your project and receive a custom quote!`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-slate-400 dark:text-slate-200 xl:text-sectiontitle3">
                Silver Tier{" "}
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Basic Plan
              </h4>
              <p>Ideal for small businesses, personal blogs, or portfolio sites. </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Up to 5 Pages: Commonly includes Home, About, Services, Blog, and Contact pages.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Basic Design and Layout: Simple design elements and layout structure.
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Responsive Design: Ensures the website displays well on various devices (desktop, tablet, mobile).
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Basic SEO: Fundamental optimization to make the website more search engine friendly.
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Contact Form: Allows visitors to reach out easily.
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-yellow-500 dark:text-yellow-400 xl:text-sectiontitle3">
                Gold Tier{" "}
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Standard Business Website
              </h4>
              <p>Suitable for small to medium-sized businesses or service providers.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    6-10 Pages: Allows for more extensive content and information dissemination.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Custom Design: Tailored design elements to match the brand identity.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Blog Integration: Enables regular content updates and engagement with visitors.
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Advanced Contact Form: Includes features like CAPTCHA to prevent spam.
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Social Media Integration: Facilitates sharing and engagement on social platforms.
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Contact Us{" "}
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Custom Enterprise Web Application
              </h4>
              <p>Designed for custom web applications.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Custom Design: Tailored to showcase products and enhance user experience.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Product Catalog and Management: Organizes products for easy browsing and purchasing.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Shopping Cart and Checkout: Essential for online transactions.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Payment Gateway Integration: Enables secure online payments.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Inventory Management: Tracks product availability.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    User Account Management: Allows customers to create accounts for personalized experiences.
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
