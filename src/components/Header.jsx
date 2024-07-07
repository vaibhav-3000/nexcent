"use client";
import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { DarkNextcentIcon } from "./Footer";
const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <div>
      <header className="flex h-20 w-full shrink-0  justify-around items-center px-4 md:px-6 dark:bg-slate-900">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#" prefetch={false}>
              {theme === "dark" ? (
                <div className="scale-75 relative left-[-30px]">
                  {" "}
                  <DarkNextcentIcon />
                </div>
              ) : (
                <NexcentIcon />
              )}
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          {theme === "dark" ? (
            <DarkNextcentIcon className="h-20 w-20" />
          ) : (
            <NexcentIcon className="h-40 w-40" />
          )}
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-inherit dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-inherit dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-inherit dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-inherit dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className=" md:hidden">
          {theme === "dark" ? <DarkNextcentIcon /> : <NexcentIcon />}
        </div>
        <div className="flex gap-5">
          <Button
            asChild
            variant="secondary"
            className="text-green-600 hidden lg:flex "
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild
            className="bg-green-600 hover:bg-green-500 hidden lg:flex dark:text-white"
          >
            <Link href="/login">Sign up</Link>
          </Button>
          <ToggleButton />
        </div>
      </header>
    </div>
  );
};

export default Header;
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function NexcentIcon(props) {
  return (
    <svg
      {...props}
      width="155"
      height="24"
      viewBox="0 0 155 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7863 13.134L13.3954 22.3669L8.00448 13.134H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z"
        fill="#263238"
      />
      <path
        d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z"
        fill="#263238"
      />
      <path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#4CAF4F" />
      <path
        d="M13.3955 0.905884L19.4121 11.189H7.36728L13.3955 0.905884Z"
        fill="#4CAF4F"
      />
      <path
        d="M20.9615 13.434L26.9839 24H14.6526L20.7744 13.434H20.9615Z"
        fill="#4CAF4F"
      />
      <path
        d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z"
        fill="#4CAF4F"
      />
      <path
        d="M60.0327 1.66901V22.0326H56.3139L47.4545 9.21588H47.3054V22.0326H43V1.66901H46.7784L55.5682 14.4758H55.7472V1.66901H60.0327Z"
        fill="#263238"
      />
      <path
        d="M70.4705 22.3309C68.8995 22.3309 67.5472 22.0128 66.4137 21.3764C65.2868 20.7334 64.4184 19.8253 63.8086 18.652C63.1987 17.472 62.8938 16.0767 62.8938 14.4659C62.8938 12.8949 63.1987 11.5161 63.8086 10.3295C64.4184 9.14297 65.2769 8.21825 66.3839 7.55537C67.4975 6.89249 68.8034 6.56105 70.3015 6.56105C71.3091 6.56105 72.247 6.72346 73.1154 7.04827C73.9904 7.36645 74.7527 7.84704 75.4023 8.49003C76.0586 9.13302 76.569 9.94173 76.9336 10.9162C77.2982 11.884 77.4805 13.0175 77.4805 14.3167V15.4801H64.5842V12.8551H73.4933C73.4933 12.2452 73.3607 11.705 73.0955 11.2343C72.8304 10.7637 72.4625 10.3958 71.9918 10.1307C71.5278 9.85887 70.9876 9.72298 70.3711 9.72298C69.7281 9.72298 69.158 9.87213 68.6609 10.1704C68.1703 10.4621 67.7859 10.8565 67.5075 11.3537C67.229 11.8442 67.0865 12.3911 67.0799 12.9943V15.49C67.0799 16.2457 67.2191 16.8986 67.4975 17.4488C67.7826 17.999 68.1836 18.4233 68.7006 18.7216C69.2177 19.0199 69.8308 19.169 70.5401 19.169C71.0108 19.169 71.4416 19.1027 71.8327 18.9701C72.2238 18.8376 72.5586 18.6387 72.837 18.3736C73.1154 18.1084 73.3275 17.7836 73.4734 17.3991L77.391 17.6576C77.1921 18.5989 76.7844 19.4209 76.168 20.1236C75.5581 20.8196 74.7693 21.3631 73.8015 21.7542C72.8403 22.1387 71.73 22.3309 70.4705 22.3309Z"
        fill="#263238"
      />
      <path
        d="M83.511 6.75992L86.315 12.0994L89.1886 6.75992H93.5337L89.109 14.3963L93.6531 22.0326H89.3278L86.315 16.7528L83.3519 22.0326H78.9769L83.511 14.3963L79.136 6.75992H83.511Z"
        fill="#263238"
      />
      <path
        d="M102.403 22.3309C100.839 22.3309 99.493 21.9995 98.3661 21.3366C97.2459 20.6671 96.3841 19.7391 95.7809 18.5525C95.1843 17.366 94.886 16.0004 94.886 14.4559C94.886 12.8915 95.1876 11.5194 95.7908 10.3395C96.4007 9.15291 97.2657 8.22819 98.386 7.56531C99.5063 6.89581 100.839 6.56105 102.383 6.56105C103.716 6.56105 104.882 6.803 105.883 7.2869C106.884 7.77081 107.676 8.45026 108.26 9.32526C108.843 10.2003 109.164 11.2277 109.224 12.4076H105.227C105.114 11.6453 104.816 11.0322 104.332 10.5682C103.855 10.0975 103.228 9.86219 102.453 9.86219C101.797 9.86219 101.223 10.0412 100.733 10.3991C100.249 10.7504 99.8709 11.2642 99.5991 11.9403C99.3273 12.6165 99.1914 13.4351 99.1914 14.3963C99.1914 15.3707 99.324 16.1993 99.5891 16.8821C99.8609 17.5648 100.242 18.0852 100.733 18.4432C101.223 18.8011 101.797 18.9801 102.453 18.9801C102.937 18.9801 103.371 18.8807 103.755 18.6818C104.146 18.4829 104.468 18.1946 104.72 17.8167C104.978 17.4323 105.147 16.9716 105.227 16.4346H109.224C109.158 17.6013 108.84 18.6288 108.27 19.517C107.706 20.3986 106.927 21.088 105.933 21.5852C104.939 22.0824 103.762 22.3309 102.403 22.3309Z"
        fill="#263238"
      />
      <path
        d="M118.896 22.3309C117.325 22.3309 115.973 22.0128 114.839 21.3764C113.713 20.7334 112.844 19.8253 112.234 18.652C111.625 17.472 111.32 16.0767 111.32 14.4659C111.32 12.8949 111.625 11.5161 112.234 10.3295C112.844 9.14297 113.703 8.21825 114.81 7.55537C115.923 6.89249 117.229 6.56105 118.727 6.56105C119.735 6.56105 120.673 6.72346 121.541 7.04827C122.416 7.36645 123.179 7.84704 123.828 8.49003C124.484 9.13302 124.995 9.94173 125.359 10.9162C125.724 11.884 125.906 13.0175 125.906 14.3167V15.4801H113.01V12.8551H121.919C121.919 12.2452 121.786 11.705 121.521 11.2343C121.256 10.7637 120.888 10.3958 120.418 10.1307C119.954 9.85887 119.413 9.72298 118.797 9.72298C118.154 9.72298 117.584 9.87213 117.087 10.1704C116.596 10.4621 116.212 10.8565 115.933 11.3537C115.655 11.8442 115.512 12.3911 115.506 12.9943V15.49C115.506 16.2457 115.645 16.8986 115.923 17.4488C116.208 17.999 116.609 18.4233 117.126 18.7216C117.643 19.0199 118.257 19.169 118.966 19.169C119.437 19.169 119.867 19.1027 120.259 18.9701C120.65 18.8376 120.984 18.6387 121.263 18.3736C121.541 18.1084 121.753 17.7836 121.899 17.3991L125.817 17.6576C125.618 18.5989 125.21 19.4209 124.594 20.1236C123.984 20.8196 123.195 21.3631 122.227 21.7542C121.266 22.1387 120.156 22.3309 118.896 22.3309Z"
        fill="#263238"
      />
      <path
        d="M132.906 13.2031V22.0326H128.67V6.75992H132.707V9.45452H132.886C133.224 8.56626 133.791 7.86361 134.587 7.34656C135.382 6.82289 136.347 6.56105 137.48 6.56105C138.541 6.56105 139.465 6.79306 140.254 7.25708C141.043 7.72109 141.656 8.38397 142.094 9.24571C142.531 10.1008 142.75 11.1217 142.75 12.3082V22.0326H138.514V13.0639C138.521 12.1292 138.282 11.4001 137.798 10.8764C137.314 10.3461 136.648 10.0809 135.8 10.0809C135.23 10.0809 134.726 10.2036 134.288 10.4488C133.857 10.6941 133.519 11.0521 133.274 11.5227C133.036 11.9867 132.913 12.5468 132.906 13.2031Z"
        fill="#263238"
      />
      <path
        d="M154.212 6.75992V9.94173H145.015V6.75992H154.212ZM147.103 3.10083H151.338V17.3395C151.338 17.7306 151.398 18.0355 151.517 18.2542C151.637 18.4664 151.802 18.6155 152.015 18.7017C152.233 18.7879 152.485 18.8309 152.77 18.8309C152.969 18.8309 153.168 18.8144 153.367 18.7812C153.566 18.7415 153.718 18.7116 153.824 18.6917L154.49 21.8437C154.278 21.91 153.98 21.9862 153.596 22.0724C153.211 22.1652 152.744 22.2216 152.194 22.2415C151.173 22.2812 150.278 22.1453 149.509 21.8338C148.747 21.5222 148.153 21.0383 147.729 20.3821C147.305 19.7258 147.096 18.8972 147.103 17.8963V3.10083Z"
        fill="#263238"
      />
    </svg>
  );
}

export const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  {
    console.log(theme);
  }
  return (
    <>
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 md:absolute md:right-10"
      >
        <svg
          class="fill-black block dark:hidden"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg
          class="fill-yellow-500 hidden dark:block"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </>
  );
};
