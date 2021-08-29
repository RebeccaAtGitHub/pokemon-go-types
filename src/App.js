import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
   const rowData = [
      {Typ: "Boden", Stark: "Gift, Gestein, Stahl, Feuer, Elektro", Verletzbar: "Wasser, Pflanze, Eis"},
      {Typ: "Drache", Stark: "Drache", Verletzbar: "Eis, Drache, Fee"},
      {Typ: "Eis", Stark: "Flug, Boden, Pflanze, Drache", Verletzbar: "Kampf, Gestein, Stahl, Feuer"},
      {Typ: "Elektro", Stark: "Flug, Wasser", Verletzbar: "Boden"},
      {Typ: "Fee", Stark: "Kampf, Drache, Unlicht", Verletzbar: "Gift, Stahl"},
      {Typ: "Feuer", Stark: "Käfer, Stahl, Pflanze, Eis", Verletzbar: "Boden, Gestein, Wasser"},
      {Typ: "Flug", Stark: "Kampf, Käfer, Pflanze", Verletzbar: "Gestein, Elektro, Eis"},
      {Typ: "Geist", Stark: "Geist, Psycho", Verletzbar: "Geist, Unlicht"},
      {Typ: "Gestein", Stark: "Flug, Käfer, Feuer, Eis", Verletzbar: "Kampf, Boden, Stahl, Wasser, Pflanze"},
      {Typ: "Gift", Stark: "Pflanze, Fee", Verletzbar: "Boden, Psycho"},
      {Typ: "Käfer", Stark: "Pflanze, Psycho, Unlicht", Verletzbar: "Flug, Gestein, Feuer"},
      {Typ: "Kampf", Stark: "Normal, Gestein, Stahl, Eis, Unlicht", Verletzbar: "Flug, Psycho, Fee"},
      {Typ: "Normal", Stark: "", Verletzbar: "Kampf"},
      {Typ: "Pflanze", Stark: "Boden, Gestein, Wasser", Verletzbar: "Flug, Gift, Käfer, Feuer, Eis"},
      {Typ: "Psycho", Stark: "Kampf, Gift", Verletzbar: "Käfer, Geist, Unlicht"},
      {Typ: "Stahl", Stark: "Gestein, Eis, Fee", Verletzbar: "Kampf, Boden, Feuer"},
      {Typ: "Unlicht", Stark: "Geist, Psycho", Verletzbar: "Kampf, Käfer, Fee"},
      {Typ: "Wasser", Stark: "Boden, Gestein, Feuer", Verletzbar: "Pflanze, Elektro"}
   ];

   return (
       <div className="ag-theme-alpine" style= {{ width: '100%', }} >
           <AgGridReact 
                defaultColDef={{
                    filter: true,
                    resizable: true,
                }}
                domLayout={'autoHeight'}
                rowData={rowData}>
               <AgGridColumn field="Typ" pinned="left" lockPinned={ true } sortable={ true }></AgGridColumn>
               <AgGridColumn field="Stark" headerName="Stark gegen"></AgGridColumn>
               <AgGridColumn field="Verletzbar" headerName="Verletzbar von"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};

export default App;