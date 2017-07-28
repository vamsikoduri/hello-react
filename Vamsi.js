import React from 'react';
import HotTable from 'react-handsontable';

const Vamsi = (props) => 
{
	debugger;
	console.log(props)
return <div >
					<HotTable root="hot" settings={{
					data: props.tableInfo.tableData,
					manualColumnResize: true,
					manualRowResize: true

					}} />
		</div>

}

export default Vamsi;



