import React from "react";
import { useSearchParams } from "react-router-dom";
import { COURENTLINE, PURPLE } from "./helper/color";

// import { Contacts } from "./Index";
const Search = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  return (
    <React.Fragment>
      <div className="col">
        <div className="input-group mx-2 w-75" dir="ltr">
          <span
            className="input-group-text"
            style={{ backgroundColor: PURPLE }}
          >
            <i className="fa fa-search"></i>
          </span>
          <input
            dir="rtl"
            type="text"
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              console.log(filter);
              if (filter) {
                setsearchParams({ filter });
              } else {
                setsearchParams({});
              }
            }}
            style={{
              backgroundColor: COURENTLINE,
              borderColor: COURENTLINE,
              color: "FORGROUND",
            }}
            className="form-control"
            placeholder="جستجو مخاطب مورد نظر"
          />

          {/* {Contacts.filter((contact) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = contact.name;
            return name.includes(filter);
          })} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
