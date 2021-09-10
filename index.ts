// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
type NumberOrString = Number | string;
function listend (port : NumberOrString)
{
  if(
    typeof port=="string"
  ){
    port=parseInt(port,10)
  }
}
listend('123');
listend(123)