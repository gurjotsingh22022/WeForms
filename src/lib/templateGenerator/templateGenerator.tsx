import React from 'react'
import ReactDOMServer from "react-dom/server";

const templateGenerator = async (content: any) => {
  return ReactDOMServer.renderToStaticMarkup(content)
}

export default templateGenerator