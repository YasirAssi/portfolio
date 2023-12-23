import { pageBuilderDiv } from "../pageBuilder.js";

let storage = () => {
    const pageContent = pageBuilderDiv.innerHTML;
    localStorage.setItem('savedPage',pageContent);
    alert('Page saved successfully!');
}

export {storage};

