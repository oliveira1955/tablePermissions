import React from "react";

function TableSubRow({ d, onChange }) {
  return (
    <tr id="subRow">
      <td>{d.firstname}</td>
      <td id="subColumnsViewListing">
        <input
          id="subClickViewListing"
          type="checkbox"
          checked={d.viewListing}
          onChange={(e) => onChange("viewListing", e.target.checked)}
        />
      </td>
      <td id="subColumnsViewListing">
        <input
          id="subClickViewDetails"
          type="checkbox"
          checked={d.viewDetails}
          onChange={(e) => onChange("viewDetails", e.target.checked)}
        />
      </td>
      <td id="subColumnsCreate">
        <input
          id="subClickCreat"
          type="checkbox"
          checked={d.create}
          onChange={(e) => onChange("create", e.target.checked)}
        />
      </td>
      <td id="subColumnsEdit">
        <input
          id="subClickEdit"
          type="checkbox"
          checked={d.edit}
          onChange={(e) => onChange("edit", e.target.checked)}
        />
      </td>
      <td id="subColumnsDelete">
        <input
          id="subClickDelete"
          type="checkbox"
          checked={d.delete}
          onChange={(e) => onChange("delete", e.target.checked)}
        />
      </td>
    </tr>
  );
}

export default TableSubRow;
