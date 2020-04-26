import React from "react";
import searchFunction from "./Search";

function reducer(state = [{}], action) {
  switch (action.type) {
    case "Dashboard":
      console.log(
        state,
        "==STATE DASHBOARD==="
      );
      console.log("%c Oh my heavens! ", "background: #222; color: #bada55");
      return [action.payload];

    case "Multiselect":
      console.log(
        state,
        "===STATE MULTISELECT==="
      );
      console.log("%c Oh my heavens! ", "background: #222; color: #bada55");
      return action.payload;

    default:
      return [
        {
          CVE_ID: "CVE-2020-9445",
          DATE_PUBLISHED: "2020-04-20",
          SEVERITY: "no severity reported",
          DESCRIPTION:
            "Zulip Server before 2.1.3 allows XSS via the modal_link feature in the Markdown func"
        },
        {
          CVE_ID: "CVE-2020-9523",
          DATE_PUBLISHED: "2020-04-17",
          SEVERITY: "no severity reported",
          DESCRIPTION:
            "Insufficiently protected credentials vulnerability on Micro Focus enterprise develop"
        }
      ];
  }
}

export default reducer;
