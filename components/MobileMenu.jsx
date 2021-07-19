/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from "next/link";
import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
    // submenu: [
    //   {
    //     id: 11,
    //     title: "Home",
    //     link: "/",
    //   },
    //   {
    //     id: 12,
    //     title: "HomePage 2",
    //     link: "/HomePage2",
    //   },
    //   {
    //     id: 13,
    //     title: "HomePage 3",
    //     link: "/HomePage3",
    //   },
    //   {
    //     id: 15,
    //     title: "HomePage 4",
    //     link: "/HomePage4",
    //   },
    //   {
    //     id: 16,
    //     title: "HomePage 5",
    //     link: "/HomePage5",
    //   },
    //   {
    //     id: 17,
    //     title: "HomePage 6",
    //     link: "/HomePage6",
    //   },
    //   {
    //     id: 18,
    //     title: "HomePage 7",
    //     link: "/HomePage7",
    //   },
    //   {
    //     id: 19,
    //     title: "HomePage 8",
    //     link: "/HomePage8",
    //   },
    //   {
    //     id: 20,
    //     title: "HomePage 9",
    //     link: "/HomePage9",
    //   },
    //   {
    //     id: 21,
    //     title: "HomePage 10",
    //     link: "/HomePage10",
    //   },
    // ],
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];
function MobileMenu() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
        {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

        <ul className="responsivemenu">
          {menus.map((item) => {
            return (
              <li key={item.id}>
                {item.submenu ? (
                  <p onClick={() => setIsOpen(item.id)}>
                    {item.title}
                    {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ""}
                  </p>
                ) : (
                  <Link href={item.link}>{item.title}</Link>
                )}
                {item.submenu ? (
                  <Collapse isOpen={item.id === isOpen}>
                    <Card>
                      <CardBody>
                        <ul>
                          {item.submenu.map((submenu) => (
                            <li key={submenu.id}>
                              <Link className="active" href={submenu.link}>
                                {submenu.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  </Collapse>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="showmenu" role={"button"} onClick={() => setIsMenuShow(!isMenuShow)}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default MobileMenu;
