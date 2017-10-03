import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Graph from '../components/graph'

export default function(data,version,time,period) {

  return ReactDOMServer.renderToStaticMarkup(<Graph
    sendData={data}
    viewSelection={version}
    timeSelection={time}
    timestampSelection={period}
    />);
}
