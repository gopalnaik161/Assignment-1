let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

 
let FirstnameInput = document.querySelector('#FirstName');
let LastnameInput = document.querySelector('#LastName');
let CityInput = document.querySelector('#City');
let CountryInput = document.querySelector('#Country');

    btnAdd.addEventListener('click',()=>{
	
	let Firstname = FirstnameInput.value;
	let Lastname = LastnameInput.value;
	let City = CityInput.value;
	let  Country= CountryInput.value;
	
	
	let template = `
	            <tr>
	            
	               <td>      </td>
	              <td>${Firstname}</td>
	              <td>${Lastname}</td>
	              <td>${City}</td>
	              <td>${Country}</td>
	            </tr>`;
	            
	            table.innerHTML += template;
	       });

	   function addRow(){
		
		let FirstName = document.getElementById('Fname').value;
		let LastName = document.getElementById('Lname').value;
		let City = document.getElementById('cty').value;
		let Country = document.getElementById('contry').value;
		
		
		let table = document.getElementsByTagName('table')[0];
		
		let newRow = table.insertRow(1);
		
		let cel1 = newRow.insertCell(0);
		let cel2 = newRow.insertCell(1);
		let cel3 = newRow.insertCell(2);
		let cel4 = newRow.insertCell(3);
		let cel5 = newRow.insertCell(4);
		
		cel2.innerHTML = FirstName;
		cel3.innerHTML = LastName;
		cel4.innerHTML = City;
		cel5.innerHTML = Country;
		
	}
	    