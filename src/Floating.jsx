import React from "react";

import Marquee from 'react-fast-marquee'
export const Floating = () => {
  const items = [
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066cbf51989440c5d6f6_Scott.png" ,
      name: "Scott Bryan",
      Brand: "@scottygb",
      quote:
        "As a dyslexic working in the media can I just advocate that otter.ai is an absolute godsend. It writes out my interview instantly (that I can change if it picks up anything incorrectly). It has saved me hours of work.",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c62b4752e5fc19009_Kevin.png",
      name: "Kevin McCann",
      Brand: "Entrepreneur",
      quote:
        "This tool is saving me a ton of time",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066bf00066b5c2fb4521_Heather.png",
      name: "Heather Applegate",
      Brand: "Ux Designer",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
    {
      img: "https://assets-global.website-files.com/618e9316785b3582a5178502/61f8066c07825a32b86caffd_Katie.png",
      name: "Katie Tabelling",
      Brand: "@Katie _tabelling",
      quote:
        "After four years... I finally broke down...and got an Otter Premium account.I hope you're happy Otter...",
    },
  ];
  return (
    <Marquee>
    <div className="floating">
      {items.map((item) => {
        return (
          <div key={item.name} className="floating-inner">
            <div className="image7">
              <img src={item.img} alt="sliding image" />
            </div>
            <div className="quotes">
              <div className="name">{item.name}</div>
              <div className="brand">{item.Brand}</div>
              <div className="quote">{item.quote}</div>
            </div>
          </div>
        );
      })}
    </div>
    </Marquee>
  );
};
