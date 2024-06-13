import React from "react";
import Contact from "./Contact";
import { COMMENT } from "./helper/color";

const Contacts = () => {
  return (
    <div>
      <React.Fragment>
        <section className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 ">
                  <button
                    className="btn mx-2 m-2"
                    style={{ backgroundColor: COMMENT }}
                  >
                    <i className="fa fa-plus"></i>افزودن مخاطب جدید
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              {
                Contacts.length > 0 ? Contacts.map((contact) => {
                  return <Contact key={contact.id} contact={contact} />;
                }) : <h3 className=" text-danger text-center ">مخاطبی یافت نشد</h3>
              }
            </div>
          </div>
        </section>
      </React.Fragment>
    </div>
  );
};

export default Contacts;
