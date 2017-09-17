// @flow

import React from 'react';

const Details = (props: any) => (
  <div className="details">
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  </div>
);

export default Details;
