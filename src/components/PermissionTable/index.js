import React, { useState, useCallback, useEffect } from "react";
import styles from "./style.css";

import TableRow from "./TableRow";
import TableSubRow from "./TableSubRow";

function PermissionTable() {
  const [openAnalysis, setOpenAnalysis] = useState(true);
  const [analysisItems, setAnalysisItems] = useState([]);

  const [openAccounts, setOpenAccounts] = useState(true);
  const [accountsItems, setAccountsItems] = useState([]);

  const [openCustomization, setOpenCustomization] = useState(true);
  const [customizationItems, setCustomizationItems] = useState([]);

  const [openFinancial, setOpenFinancial] = useState(true);
  const [financialItems, setFinancialItems] = useState([]);

  const applyCheckboxProperties = useCallback(
    (arr) =>
      arr.map((item) => ({
        ...item,
        viewListing: false,
        viewDetails: false,
        create: false,
        edit: false,
        delete: false,
      })),
    []
  );

  useEffect(() => {
    const defaultAnalysisItems = [
      { id: 1, firstname: "Análise de contas" },
      { id: 2, firstname: "Análise de transações" },
    ];

    const defaultAccountsItems = [
      { id: 3, firstname: "Clientes" },
      { id: 4, firstname: "Transações" },
      { id: 5, firstname: "Contas digitais" },
    ];

    const defaultCustomizationItems = [
      { id: 6, firstname: "Limites e horários" },
      { id: 7, firstname: "Tarifas" },
      { id: 8, firstname: "Tarifas personalidades" },
      { id: 9, firstname: "Conta" },
    ];

    const defaultFinancialItems = [{ id: 10, firstname: "Entradas" }];

    setAnalysisItems(applyCheckboxProperties(defaultAnalysisItems));
    setAccountsItems(applyCheckboxProperties(defaultAccountsItems));
    setCustomizationItems(applyCheckboxProperties(defaultCustomizationItems));
    setFinancialItems(applyCheckboxProperties(defaultFinancialItems));
  }, []);

  const areAllChecked = (property) => {
    return ![
      ...analysisItems,
      ...accountsItems,
      ...customizationItems,
      ...financialItems,
    ].find((item) => !item[property]);
  };

  const applyOnChangeAllProperty = useCallback(
    (arr, property, checked) =>
      arr.map((item) => ({
        ...item,
        [property]: checked,
      })),
    []
  );

  const onChangeAllProperty = (property, checked) => {
    setAnalysisItems(
      applyOnChangeAllProperty(analysisItems, property, checked)
    );

    setAccountsItems(
      applyOnChangeAllProperty(accountsItems, property, checked)
    );

    setCustomizationItems(
      applyOnChangeAllProperty(customizationItems, property, checked)
    );

    setFinancialItems(
      applyOnChangeAllProperty(financialItems, property, checked)
    );
  };

  const onSubmit = () => {
    console.log("Final Result", [
      ...analysisItems,
      ...accountsItems,
      ...customizationItems,
      ...financialItems,
    ]);
  };

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead id="header">
          <tr id={"columnsName"}>
            <th scope="col"></th>
            <th scope="col">Ver Listagem</th>
            <th scope="col">Ver Detalhes</th>
            <th scope="col">Criar</th>
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>
          </tr>
        </thead>
        <tbody>
          <tr id="AllColumns">
            <th>Todos</th>
            {["viewListing", "viewDetails", "create", "edit", "delete"].map(
              (property) => (
                <th scope="col" key={property} id="clickAllColumn">
                  <input
                    id="clickAll"
                    type="checkbox"
                    checked={areAllChecked(property)}
                    onChange={(e) =>
                      onChangeAllProperty(property, e.target.checked)
                    }
                  />
                </th>
              )
            )}
          </tr>
          <TableRow
            header="Análises"
            handleOpenSubRow={() => setOpenAnalysis(!openAnalysis)}
            subRow={analysisItems}
            setSubRow={setAnalysisItems}
          />
          {openAnalysis &&
            analysisItems?.map?.((d, i) => (
              <TableSubRow
                key={d.id}
                d={d}
                onChange={(property, checked) => {
                  const clone = [...analysisItems];
                  clone[i][property] = checked;
                  setAnalysisItems(clone);
                }}
              />
            ))}
          <TableRow
            header="Contas"
            handleOpenSubRow={() => setOpenAccounts(!openAccounts)}
            subRow={accountsItems}
            setSubRow={setAccountsItems}
          />
          {openAccounts &&
            accountsItems?.map?.((d, i) => (
              <TableSubRow
                key={d.id}
                d={d}
                onChange={(property, checked) => {
                  const clone = [...accountsItems];
                  clone[i][property] = checked;
                  setAccountsItems(clone);
                }}
              />
            ))}
          <TableRow
            header="Customização"
            handleOpenSubRow={() => setOpenCustomization(!openCustomization)}
            subRow={customizationItems}
            setSubRow={setCustomizationItems}
          />
          {openCustomization &&
            customizationItems?.map?.((d, i) => (
              <TableSubRow
                key={d.id}
                d={d}
                onChange={(property, checked) => {
                  const clone = [...customizationItems];
                  clone[i][property] = checked;
                  setCustomizationItems(clone);
                }}
              />
            ))}
          <TableRow
            header="Financeiro"
            handleOpenSubRow={() => setOpenFinancial(!openFinancial)}
            subRow={financialItems}
            setSubRow={setFinancialItems}
          />
          {openFinancial &&
            financialItems?.map?.((d, i) => (
              <TableSubRow
                key={d.id}
                d={d}
                onChange={(property, checked) => {
                  const clone = [...financialItems];
                  clone[i][property] = checked;
                  setFinancialItems(clone);
                }}
              />
            ))}
        </tbody>
      </table>
      <button
        className="btn btn-primary btn-sm float-right my-3"
        onClick={onSubmit}
      >
        Cadastrar
      </button>
    </div>
  );
}

export default PermissionTable;
