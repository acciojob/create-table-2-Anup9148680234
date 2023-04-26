function createTable() {
    //Write your code here
  let tab = document.getElementById('myTable');
  let n = prompt("input number of rows");
  let m = prompt("input number of columns");
	for(let i=0;i<n;i++){
		let row = tab.insertRow(i);
		for(let j=0;j<m;j++){
			let cell = row.insertCell(j);
			cell.innerHTML = `Row-${i} Column-${j}`
		}
	}
}
