import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import store from './Store';



class AGGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "CVE ID",
          field: "CVE_ID"
        },
        {
          headerName: "DATE PUBLISHED",
          field: "DATE_PUBLISHED"
        },
        {
          headerName: "SEVERITY",
          field: "SEVERITY"
        },
        {
          headerName: "DESCRIPTION",
          field: "DESCRIPTION"
        }
      ],
      rowData: [{
        CVE_ID: "CVE-2020-7079",
        DATE_PUBLISHED: "2020-04-17",
        SEVERITY: "no severity reported",
        DESCRIPTION:
          "An improper signature validation vulnerability in Autodesk Dynamo BIM versions 2.5.1"

        
        }]    
    }


  }
  



 
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "300px",
          width: "1600px",
          paddingLeft: "200px",
          marginBottom: "100px",
          marginTop: "100px"
        }}
      >

        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.props.state}
        ></AgGridReact>

      </div>
    );
  }
}

export default AGGrid;
