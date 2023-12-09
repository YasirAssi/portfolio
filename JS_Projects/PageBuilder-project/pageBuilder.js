let elementCreater = () => {
    let div = document.createElement('div');
    div.className = 'div';
    
    const labelOfColor = document.createElement('label');
    labelOfColor.className = 'labelOfColor';
    labelOfColor.textContent = 'Background Color';

    const colorInput = document.createElement('input');
    colorInput.className = 'form-control';

    const labelOfType = document.createElement('label');
    labelOfType.className = 'labelOfType'
    labelOfType.textContent = 'Element Type';

    const typeInput = document.createElement('input');
    typeInput.className = 'form-control';

    const labelOfWidth = document.createElement('label');
    labelOfWidth.className = 'labelOfWidth';
    labelOfWidth.textContent = 'Width';

    const widthInput = document.createElement('input');
    widthInput.className = 'form-control';

    const labelOfHeight = document.createElement('label');
    labelOfHeight.className = 'labelOfHeight';
    labelOfHeight.textContent = 'height';

    const heightInput = document.createElement('input');
    heightInput.className = 'form-control';

    const labelOfText = document.createElement('label');
    labelOfText.className = 'labelOfText';
    labelOfText.textContent = 'Content';

    const textInput = document.createElement('textarea');
    textInput.className = 'form-control';

    const FontColorlabel = document.createElement('label');
    FontColorlabel.className = 'FontColorlabel';
    FontColorlabel.textContent = 'Font Color';

    const FontColorInput = document.createElement('input');
    FontColorInput.className = 'form-control';

    const FontSizelabel = document.createElement('label');
    FontSizelabel.className = 'FontSizelabel';
    FontSizelabel.textContent = 'Font Size';

    const FontSizeInput = document.createElement('input');
    FontSizeInput.className = 'form-control';

    const FontTypelabel = document.createElement('label');
    FontTypelabel.className = 'FontTypelabel';
    FontTypelabel.textContent = 'Font Type';

    const FontTypeInput = document.createElement('input');
    FontTypeInput.className = 'form-control';

    const buttonDiv = document.createElement('footer');
    buttonDiv.className = 'd-grid gap-2 d-md-block';

    const addButton = document.createElement('button');
    addButton.className = 'btn btn-warning fs-6'; 
    addButton.textContent = 'add';
    addButton.onclick = () => {
    const inputData = {
        type: typeInput.value.trim(),
        color: colorInput.value.trim(),
        width: widthInput.value.trim(),
        height: heightInput.value.trim(),
        text: textInput.value.trim(),
        fontColor: FontColorInput.value.trim(),
        fontSize: FontSizeInput.value.trim(),
        fontType: FontTypeInput.value.trim(),
    };
    pageToBuild(inputData);
};

    const saveButton = document.createElement('button');
    saveButton.className = 'btn btn-warning fs-6'; 
    saveButton.textContent = 'Save';
    saveButton.onclick = () => storage();

    buttonDiv.appendChild(addButton);
    buttonDiv.appendChild(saveButton);


    div.appendChild(labelOfColor);
    div.appendChild(colorInput);
    div.appendChild(labelOfType);
    div.appendChild(typeInput);
    div.appendChild(labelOfWidth);
    div.appendChild(widthInput);
    div.appendChild(labelOfHeight);
    div.appendChild(heightInput);
    div.appendChild(labelOfText);
    div.appendChild(textInput);
    div.appendChild(FontColorlabel);
    div.appendChild(FontColorInput);
    div.appendChild(FontSizelabel);
    div.appendChild(FontSizeInput);
    div.appendChild(FontTypelabel);
    div.appendChild(FontTypeInput);
    div.appendChild(buttonDiv);
    
    document.body.querySelector('.pageBuilder').appendChild(div);
}
let pageBuilderDiv = document.createElement('div');
pageBuilderDiv.className = 'pageBuilderDiv';

let pageToBuild = (pageBuilderData) => {
    let newElement = document.createElement(pageBuilderData.type || 'div'); 
    newElement.className = 'newElement';
    newElement.style.backgroundColor = pageBuilderData.color || 'transparent';
    newElement.style.width = pageBuilderData.width || 'auto';
    newElement.style.height = pageBuilderData.height || 'auto';
    newElement.textContent = pageBuilderData.text || 'hello';
    newElement.style.color = pageBuilderData.fontColor || 'black';
    newElement.style.fontSize = pageBuilderData.fontSize || '16px';
    newElement.style.fontFamily = pageBuilderData.fontType || 'Arial';

    document.body.appendChild(pageBuilderDiv);
    pageBuilderDiv.appendChild(newElement);
    pageBuilderDiv.innerHTML += '';
}

let storage = () => {
    const pageContent = document.body.innerHTML;
    localStorage.setItem('savedPage', pageContent);
    alert('Page saved successfully!');
}

onload = () => {
    const savedPageContent = localStorage.getItem('savedPage');
    if (savedPageContent) {
        document.body.innerHTML = savedPageContent;
    }
};

elementCreater();


