// api url
const api_url = "https://rhodesapi.cyclic.app/api/operator";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab = `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;

  // Loop to access all rows
  for (let r of data.list) {
    tab += `<tr> 
    <td>${r[0].name} </td>
    <td>${r[0].affiliation}</td>
    <td>${r[0].artist}</td> 
    <td>${r[0].rarity}</td>          
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}
