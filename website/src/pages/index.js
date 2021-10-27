import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { DuplicateIcon } from "@heroicons/react/outline";
import Header from "../components/Header";

export default function Index({ location }) {
  // let installCommand = "npm install @cloudcamp/cli";
  return (
    <div>TODO</div>
    // <Layout pathname={location.pathname}>
    //   <Header
    //     title="Launch faster by building scalable infrastructure in few lines of code."
    //     canonical="/"
    //   />
    //   <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900">
    //     Launch faster by building scalable infrastructure in few lines of code.
    //   </h1>
    //   <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-gray-500">
    //     Cloudcamp is an easy-to-use framework for building cloud infrastructure
    //     as code. Combine simple classes such as{" "}
    //     <Link to="/docs/api/web-server">
    //       <code className="font-mono text-gray-900 font-bold ">WebServer</code>
    //     </Link>
    //     ,{" "}
    //     <Link to="/docs/api/database">
    //       <code className="font-mono text-gray-900 font-bold ">Database</code>
    //     </Link>{" "}
    //     and{" "}
    //     <Link to="/docs/api/domain">
    //       <code className="font-mono text-gray-900 font-bold ">Domain</code>
    //     </Link>{" "}
    //     to create anything you can imagine.
    //   </p>
    //   <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
    //     <Link
    //       className={
    //         "w-full sm:w-auto flex-none bg-blue-600 hover:bg-indigo-600 hover:scale-110 " +
    //         "text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl " +
    //         "focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none " +
    //         "transition-all duration-200 "
    //       }
    //       to="/docs"
    //     >
    //       Get started
    //     </Link>
    //     <button
    //       type="button"
    //       className={
    //         "w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 " +
    //         "font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex " +
    //         "items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2" +
    //         "focus:ring-offset-white focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none transition-colors duration-200"
    //       }
    //       onClick={() =>
    //         navigator.clipboard
    //           ? navigator.clipboard.writeText(installCommand)
    //           : window.clipboardData.setData("Text", installCommand)
    //       }
    //     >
    //       <span className="text-gray-900">
    //         <span className="hidden sm:inline text-gray-500" aria-hidden="true">
    //           ${" "}
    //         </span>
    //         {installCommand}
    //       </span>
    //       <span className="sr-only">(click to copy to clipboard)</span>
    //       <DuplicateIcon className="block h-6 w-6" aria-hidden="true" />
    //     </button>
    //   </div>
    // </Layout>
  );
}
