$( document ).ready( onReady );

let input = []; 

function onReady() {
    console.log('Submit Button');
    
    $( '#addInfoButton' ).on( 'click', addInfo);
}

function addInfo() {
    // capture user input
    // place in a new object
    let addEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }
        console.log( 'adding:', addEmployee );
        // push object into array
        input.push( addEmployee );
        // display inputs
        $('.employeeInput').val('');
        showEmployeeInfo();
       

}
function addTaskHandler(event) {
    event.preventDefault();
}

function showEmployeeInfo(){
    let el = $( '#employeeOut' );
    // empty our input element
    el.empty();
    
    // loop through Employee info
for( let i = 0; i<input.length; i++ ) {
    // append each employee to the DOM
    el.append( `<li>${input[i].firstName}</li>` );
    el.append(`<li>${input[i].lastName}</li>`);
    el.append(`<li>${input[i].idNumber}</li>`);
    el.append(`<li>${input[i].title}</li>`);
    el.append(`<li>${input[i].annualSalary}</li>`);
} // end for
}