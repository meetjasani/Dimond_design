import React from "react";
import { Fragment } from "react";
import { Disclosure} from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Buttons from "../../common/Buttons";
import Bedges from "../../common/Badges";
import Menus from "../../common/Menus";

const navigation = ["Dashboard", "Team", "Projects", "Calendar", "Reports"];
const profile = ["Your Profile", "Settings", "Sign out"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
let itemsClassName =
  "origin-top-right absolute right-0 mt-2 w-48 z-20 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
let itemClassName = "block px-4 py-2 text-sm text-gray-700";
const menuButtonIcon = () => {
  return (
    <>
      <span className="sr-only">Open user menu</span>
      <img className="h-8 w-8 rounded-full" src="./img/avtar2.png" alt="" />
      <div className="absolute right-0 top-3">
        <img src="./img/downarrow.svg " alt="" />
      </div>
      <div className="w-3 h-3 bg-scogoorange rounded-full border-2 border-white absolute bottom-0 right-3"></div>
    </>
  );
};
const handleItemClick = (type) => {};
const Header = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-white border border-gray-200 px-4 fixed w-full z-50"
    >
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <img
                      className="h-12 w-24"
                    src="./img/logo.svg"
                    alt="Workflow"
                  /> */}
                  <h2 className="text-3xl font-medium text-yellow-600">Logo</h2>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Buttons buttonClass="px-4 relative">
                    <img src="./img/chatblack.svg" />
                    <Bedges className="bg-scogoorange absolute -top-2 right-2 h-4 w-4 leading-4 rounded-full ml-auto">
                      2
                    </Bedges>
                  </Buttons>

                  <Buttons buttonClass="px-4 relative">
                    <img src="./img/wallet.svg" />
                    <Bedges className="bg-scogoorange absolute -top-2 right-2 h-4 w-4 leading-4 rounded-full ml-auto">
                      2
                    </Bedges>
                  </Buttons>

                  <Buttons buttonClass="px-4 relative">
                    <img src="./img/bell.svg" />
                    <Bedges className="bg-scogoorange absolute -top-2 right-2 h-4 w-4 leading-4 rounded-full ml-auto">
                      2
                    </Bedges>
                  </Buttons>
                  <Menus
                    as="div"
                    className="ml-3 relative"
                    //   displayType="flex"
                    //   position="mr-auto"
                    menuButtonIcon={menuButtonIcon}
                    handleItemClick={handleItemClick}
                    itemsClassName={itemsClassName}
                    itemLable={profile}
                    itemClassName={itemClassName}
                  />
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {profile.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
