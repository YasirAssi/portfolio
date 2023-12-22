const paragraphs = [
    "I am excited to present my latest projects, a comprehensive showcase of my skills in web development, HTML, CSS, Bootstrap, and SASS (First Module). Within this collection, you'll find six distinct First Module landing pages, each thoughtfully designed to emphasize various facets of my web development skills within this module.In addition you will meet my first 9 projects with JavaScript. Leveraging the power of JavaScript, Is bringing dynamic functionality to my projects.",
    
    "Allow me to introduce myself. My name is Yasir Asi, and I am actively seeking a new career path in the field of fullstack engineering.I am currently participating in a Full Stack Engineering course with Hacker.U. Additionally, I hold a Bachelors degree in Psychology and Communication, complemented by a Masters degree in Humanities. As I continue to evolve in the dynamic field of web development, I am dedicated to staying current with emerging trends and technologies. Whether it's optimizing performance through JavaScript frameworks or exploring innovative design concepts, I approach each project with enthusiasm and a commitment to excellence. Thank you for taking the time to explore my portfolio. I look forward to discussing how my skills, including advanced JavaScript, align with your web development needs."
    ];

    function animateParagraph(index, containerId) {
        const paragraph = paragraphs[index];
        const wordArray = paragraph.split(' ');
        const container = document.getElementById(containerId);
        let currentWordIndex = 0;

    function showNextWord() {
        if (currentWordIndex < wordArray.length) {
            const span = document.createElement('span');
            span.textContent = wordArray[currentWordIndex] + ' ';
            container.appendChild(span);
            currentWordIndex++;
            setTimeout(showNextWord, 200);
        }
    }

    showNextWord();
    }

    animateParagraph(0, 'wordByWordI');
    animateParagraph(1, 'wordByWord');

