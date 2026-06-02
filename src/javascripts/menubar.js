import React from "react";
import { ReactDOMServer } from "react-dom/server";

import { props } from "./menubarData.js";
import W_Header_all_links from "../stylesheets/components/C_HeaderLinks.jsx";

const menubar = ReactDOMServer.renderToString(React.createElement(C_MenuLinks, props));

export { menubar };
