import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Student() {
  const [studentState, setStudentState] = useState([]);
  const [openAnalysis, setOpenAnalysis] = useState(false);

  useEffect(() => {
    let studentState = [
      { id: 1, firstname: "Análise de contas" },
      { id: 2, firstname: "Análise de transações" },
      { id: 3, firstname: "Clientes" },
      { id: 4, firstname: "Transações" },
      { id: 5, firstname: "Contas digitais" }
    ];

    const test = {
      analysis: {
        open: true,
        items: [
          { id: 1, firstname: "Análise de contas" },
          { id: 2, firstname: "Análise de transações" },
        ]
      },
      accounts: {
        open: true,
        items: [
          { id: 3, firstname: "Clientes" },
          { id: 4, firstname: "Transações" },
          { id: 5, firstname: "Contas digitais" }
        ]
      },
      customization:{
        open: true,
        items: [
          { id: 6, firstname: "Limites e horários" },
          { id: 7, firstname: "Tarifas" },
          { id: 8, firstname: "Tarifas personalidades" },
          { id: 9, firstname: "Conta" }
        ]
      },
      financial:{
        open: true,
        items: [
          { id: 10, firstname: "Entradas" }
        ]
      }
    }

    Object.keys(test).forEach(section => {
      test[section].items.forEach(item => {
        item.viewListing = false;
        item.viewDetails = false;
        item.create = false;
        item.edit = false;
        item.delete = false;
      })
    })

    setStudentState(
      studentState.map(d => {
        return {
          select: false,
          id: d.id,
          firstname: d.firstname,
          lastname: d.lastname,
          major: d.major
        };
      })
    );
  }, []);

  return (
    <div className="container">
      <Link to="/add">
        <button
          type="button"
          className="btn btn-primary btn-sm float-right my-3"
        >
          Add
        </button>
      </Link>
      <table className="table table-bordered">
        <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">Ver Listagem</th>
            <th scope="col">Ver Detalhes</th>
            <th scope="col">Criar</th>
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>
          </tr>
        </thead>
        <tbody>
        {/* linha 1 */}
          <tr>
            <th>Todos</th>
            <th scope="col">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              ></input>
            </th>
            <th scope="col">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.select1 = checked;
                      return d;
                    })
                  );
                }}
              ></input>
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          
          {/* linha 2 */}
          <tr>
            <th onClick={() => setOpenAnalysis(!openAnalysis)}>Análises</th>
            <th scope="col">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              ></input>
            </th>
            <th scope="col">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.select1 = checked;
                      return d;
                    })
                  );
                }}
              ></input></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          {studentState.map((d, i) => (
            // linha 2.1
            <tr key={d.id}>
              <td>{d.firstname}</td>
              <th scope="row">
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setStudentState(
                      studentState.map(data => {
                        if (d.id === data.id) {
                          data.select = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={d.select}
                ></input>
              </th>
              <td>
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setStudentState(
                      studentState.map(data => {
                        if (d.id === data.id) {
                          data.select = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={d.select1}
                ></input>
              </td>
              <td>{d.lastname}</td>
              <td>{d.major}</td>
            </tr>
          ))}
          <tr>
            <th>Contas</th>
            <th scope="col">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              ></input>
            </th>
            <th scope="col">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.select1 = checked;
                      return d;
                    })
                  );
                }}
              ></input></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          {studentState.map((d, i) => (
            // linha 3.1
            <tr key={d.id}>
              <td>{d.firstname}</td>
              <th scope="row">
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setStudentState(
                      studentState.map(data => {
                        if (d.id === data.id) {
                          data.select = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={d.select}
                ></input>
              </th>
              <td>
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setStudentState(
                      studentState.map(data => {
                        if (d.id === data.id) {
                          data.select = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={d.select1}
                ></input>
              </td>
              <td>{d.lastname}</td>
              <td>{d.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
