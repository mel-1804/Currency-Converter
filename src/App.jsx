// import { useState } from 'react'

function App() {
  return (
    <>
      <div className="d-flex flex-column align-items-center p-5">
        <div className="input-group input-group-sm w-25 p-2">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Moneda 1:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example
            input"
            aria-describedby="inputGroup-sizing-sm"
          ></input>
        </div>

        <div className="input-group input-group-sm w-25 p-2">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Moneda 2:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example
            input"
            aria-describedby="inputGroup-sizing-sm"
          ></input>
        </div>

        <div className="input-group input-group-sm w-25 p-2">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Cant. Mon1:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example
            input"
            aria-describedby="inputGroup-sizing-sm"
          ></input>
        </div>

        <div className="input-group input-group-sm w-25 p-2">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Equiv. Mon2:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example
            input"
            aria-describedby="inputGroup-sizing-sm"
          ></input>
        </div>
      </div>
    </>
  );
}

export default App;
