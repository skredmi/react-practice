import React from "react";

export class Task22 extends React.Component {
  constructor() {
    super();
    this.state = {
      hrefs: [
        { href: "1.html", text: "ссылка 1" },
        { href: "2.html", text: "ссылка 2" },
        { href: "3.html", text: "ссылка 3" },
      ],
    };
  }

  render() {
    const list = this.state.hrefs.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.href}>{item.text}</a>
        </li>
      );
    });
    return <ul>{list}</ul>;
  }
}
