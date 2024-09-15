// src/pages/Page.jsx
import React from 'react';
import Sec31 from '../Components/page3/Sec31';
import Sec32 from '../Components/page3/Sec32';
import Sec33 from '../Components/page3/Sec33';
import Faq3 from '../Components/page3/Faq3';

const Page2 = ({ content }) => {
  return (
    <div>
      <Sec31 content={content.sec1} />
      <Sec32 content={content.sec2} />
      <Sec33 content={content.sec3} />
      <Faq3 content={content.faq} />
    </div>
  );
};

export default Page2;
