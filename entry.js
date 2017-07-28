    import React from "react";
    import { render}
    from "react-dom";
    import HotTable from 'react-handsontable';

   
    import Vamsi from './Vamsi'
      

    class HelloReact extends React.Component {

        constructor(props) {
        super(props);

        var handsontableData = [
        ["Long Long Long Table Name","","","","","","","","","","","","","",""],
        ["", "Ford", "Volvo", "Toyota", "Honda","Ford1","Ford2","Ford3","Ford4","Ford5","Ford6","Ford7","Ford8","Ford9","Ford10","Ford11","Ford12","Ford13","Ford14","Ford15","Ford16","Ford17","Ford18","Ford19","Ford20","Ford21","Ford22","Ford23","Ford24","Ford25","Ford26","Ford27","Ford28","Ford29",],
        ["2016", "test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123",],
        ["2017", 20, 11, 14, 13],
        ["2018", 30, 15, 12, 13]
        ];

        var handsontableData1 = [
        ["", "Ford11", "Volvo11", "Toyota11", "Honda11","Ford","Ford2","Ford3","Ford4","Ford5","Ford6","Ford7","Ford8","Ford9","Ford10","Ford11","Ford12","Ford13","Ford14","Ford15","Ford16","Ford17","Ford18","Ford19","Ford20","Ford21","Ford22","Ford23","Ford24","Ford25","Ford26","Ford27","Ford28","Ford29",],
        ["2016", "test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123",],
        ["2017", 20, 11, 14, 13],
        ["2018", 30, 15, 12, 13]
        ];

        var handsontableData2 = [
        ["", "Ford22", "Volvo22", "Toyota22", "Honda22","Ford12","Ford2","Ford3","Ford4","Ford5","Ford6","Ford7","Ford8","Ford9","Ford10","Ford11","Ford12","Ford13","Ford14","Ford15","Ford16","Ford17","Ford18","Ford19","Ford20","Ford21","Ford22","Ford23","Ford24","Ford25","Ford26","Ford27","Ford28","Ford29",],
        ["2016", "test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123","test123",],
        ["2017", 20, 11, 14, 13],
        ["2018", 30, 15, 12, 13]
        ];

        this.tableInfo = {
            tableData : handsontableData,
            tableName : "LONG LONG LONG LONG LONG LONG LONG LONG LONG HEADING FOR TABLE"
        }

        this.tableInfo1 = {
            tableData : handsontableData1,
            tableName : "LONG LONG LONG LONG LONG LONG LONG LONG LONG HEADING FOR TABLE111"
        }

        this.tableInfo2 = {
            tableData : handsontableData2,
            tableName : "LONG LONG LONG LONG LONG LONG LONG LONG LONG HEADING FOR TABLE222"
        }


    }
       render() {
         debugger;
         return (
            <div>

                    <div> Table1 </div>
                    <Vamsi tableInfo={this.tableInfo}/>
                    <div> Table2 </div>
                    <Vamsi tableInfo={this.tableInfo1}/>
                    <div> Table3 </div>
                     <Vamsi tableInfo={this.tableInfo2}/> 
                    



            </div>








            );
        }
    }

    render( < HelloReact / > , document.getElementById('root-app'));