let deleteElement = () => {
    const pageBuilderDiv = document.querySelector('.pageBuilderDiv');
    const element = pageBuilderDiv.children;

    if (element.length === 0) {
        alert('No elements to delete.');
        return;
    }
    
const indexToDelete = prompt(`Enter the number (1-${element.length}) of the element to delete:`);

    const index = +indexToDelete;
    if (isNaN(index) || index < 1 || index > element.length) {
        alert('Invalid input. Please enter a valid number.');
        return;
    }

    const elementToDelete = element[index - 1];
    pageBuilderDiv.removeChild(elementToDelete);
}

export {deleteElement};
