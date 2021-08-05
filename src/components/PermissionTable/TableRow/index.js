import React from "react";

function TableRow({
  handleOpenSubRow = () => {},
  header = "",
  subRow = [],
  setSubRow = () => {},
}) {
  const handleChanges = (checked, property) => {
    const clone = [...subRow];

    clone.forEach((item) => (item[property] = checked));

    setSubRow(clone);
  };

  return (
    <tr id="modulesRow">
      <th onClick={handleOpenSubRow}>{header}</th>
      <th scope="col" id="modulesColumnsViewListing">
        <input
          id="clickViewListing"
          type="checkbox"
          checked={!subRow.find((d) => !d.viewListing)}
          onChange={(e) => handleChanges(e.target.checked, "viewListing")}
        />
      </th>
      <th scope="col" id="modulesColumnsViewDetails">
        <input
          id="clickViewDetails"
          type="checkbox"
          checked={!subRow.find((d) => !d.viewDetails)}
          onChange={(e) => handleChanges(e.target.checked, "viewDetails")}
        />
      </th>
      <th scope="col" id="modulesColumnsCreat">
        <input
          id="clickCreate"
          type="checkbox"
          checked={!subRow.find((d) => !d.create)}
          onChange={(e) => handleChanges(e.target.checked, "create")}
        />
      </th>
      <th scope="col" id="modulesColumnsEdit">
        <input
          id="clickEdit"
          type="checkbox"
          checked={!subRow.find((d) => !d.edit)}
          onChange={(e) => handleChanges(e.target.checked, "edit")}
        />
      </th>
      <th scope="col" id="modulesColumnsDelete">
        <input
          id="clickDelete"
          type="checkbox"
          checked={!subRow.find((d) => !d.delete)}
          onChange={(e) => handleChanges(e.target.checked, "delete")}
        />
      </th>
    </tr>
  );
}

export default TableRow;
