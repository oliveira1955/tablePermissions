import React from "react";

function TableSubRow({ d, onChange }) {
  return (
    <tr>
      <td>{d.firstname}</td>
      <td>
        <input
          type="checkbox"
          checked={d.viewListing}
          onChange={(e) => onChange("viewListing", e.target.checked)}
        />
      </td>
      <td>
        <input
          type="checkbox"
          checked={d.viewDetails}
          onChange={(e) => onChange("viewDetails", e.target.checked)}
        />
      </td>
      <td>
        <input
          type="checkbox"
          checked={d.create}
          onChange={(e) => onChange("create", e.target.checked)}
        />
      </td>
      <td>
        <input
          type="checkbox"
          checked={d.edit}
          onChange={(e) => onChange("edit", e.target.checked)}
        />
      </td>
      <td>
        <input
          type="checkbox"
          checked={d.delete}
          onChange={(e) => onChange("delete", e.target.checked)}
        />
      </td>
    </tr>
  );
}

export default TableSubRow;
