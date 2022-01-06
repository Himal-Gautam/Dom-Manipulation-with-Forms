  const myform = document.querySelector("#form");
  const submit = document.querySelector("#submit");
  const inputs = Array.from(myform.querySelectorAll(".inputs"));

  console.log(inputs);

  //on submit event
  submit.addEventListener("click", (event) => {
  event.preventDefault();//prevents reload

  //selects table
  const mytable = document.querySelector(".table")

  //selects table body
  const tbody = mytable.children[1]

  //create row element
  const mycurrent_row = document.createElement("tr");
  
  // looping through inputs having string type
  for(var i = 0; i < 8; i++) {

    //creating cell
    let mycurrent_cell = document.createElement("td");
    
    if(i<6){//for first 6 inputs
      var data = inputs[i].value;
      inputs[i].value = "";
    }
    else if(i==6){//for gender
      if(document.querySelector('#Male').checked == true) {   
        var data = "Male"  
        document.querySelector('#Male').checked = false;
      } else if(document.querySelector('#Female').checked == true){  
        var data = "Female";
        document.querySelector('#Female').checked = false;
      }  
    }
    else{//for food
        const choices = document.querySelectorAll(".choice")
        var data = "";
        choices.forEach((choice) => {
          if(choice.checked == true){
            data += choice.value;
            data += " "
            choice.checked = false;
          }
        })
    }

    //add data to the current cell
    mycurrent_cell.innerText = data;

    //appending cell to row
    mycurrent_row.appendChild(mycurrent_cell);
  }

  //adds row to the table body
  tbody.appendChild(mycurrent_row);

});








