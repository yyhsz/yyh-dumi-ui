import React from 'react';
import { Button } from 'yyhreact-ui2';

export default () => {
  return (
    <>
      <div>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="link">Link</Button>
        <Button type="text">Text</Button>
      </div>
      <div>
        <Button type="primary" disabled={true}>
          Primary(disabled)
        </Button>
        <Button disabled={true}>Default Button(disabled)</Button>
        <Button disabled={true} type="link">
          Link(disabled)
        </Button>
        <Button disabled={true} type="text">
          Text(disabled)
        </Button>
      </div>
    </>
  );
};
