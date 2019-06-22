$( document ).ready( onReady );

let input = []; 

function onReady() {
    console.log('Submit Button');
    
    $( '#addInfoButton' ).on( 'click', addInfo);
    $(' #tbodyInfoOut').on('click', '#deleteButton',  deleteEmployee);
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
    let el = $( '#tbodyInfoOut' );
    // empty our input element
    el.empty();

    let monthlySalary = 0;
    let totalAnnualSalary = 0;
    
    // loop through Employee info
for( let i = 0; i<input.length; i++ ) {
    // append each employee to the DOM
    el.append(
        `<tr>
    <td>${input[i].firstName}</td>
    <td>${input[i].lastName}</td>
    <td>${input[i].idNumber}</td>
    <td>${input[i].title}</td>
    <td>${input[i].annualSalary}</td>
    <td><button id="deleteButton">Delete</button>
    </tr>`)
    totalAnnualSalary += Number(input[i].annualSalary);
} // end for
    monthlySalary = Math.round(totalAnnualSalary / 12);

    $( '#background' ).html(monthlySalary);

    if (monthlySalary > 20000){
        $( '#background' ).parent().addClass( 'backgroundRed' );
    } // end if 

}// end showEmployeeInfo

function deleteEmployee() {
    // 'this' is the delete button...
    // We want to remove it's parent element.
    $(this).closest('tr').remove();

} // end delteEmployeeInfo



