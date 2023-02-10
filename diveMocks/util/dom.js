export function showError(message) {
  if(!message){
    throw new Error('there is no string in the message');
  }
  const errorContainerElement = document.getElementById('errors');
  const errorMessageElement = document.createElement('p');
  errorMessageElement.textContent = message;
  errorContainerElement.innerHTML = '';
  errorContainerElement.append(errorMessageElement);
}
