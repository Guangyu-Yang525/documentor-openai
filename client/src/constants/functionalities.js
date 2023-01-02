export const FUNCTIONALITIES = [
    {
        id: 1,
        title: "Grammar Correction",
        description: "Correct the grammar of given document",
    },
    {
        id: 2,
        title: "Keywords Extraction",
        description: "Extract keywords from given document"
    },
    {
        id: 3,
        title: "Summarize Document",
        description: "Generate a short summary of given document"
    },
    {
        id: 4,
        title: "Essay Outline",
        description: "Generate outline of an essay based on given topic"
    }
]

export const EXAMPLES = {
    1: {
        input: "Example Input: \nShe no went to the market.",
        output:"Example Output: \nShe did not go to the market."
    },
    2: {
        input: "Example Input: \nBlack-on-black ware is a 20th- and 21st-century pottery tradition developed by the Puebloan Native American ceramic artists in Northern New Mexico. Traditional reduction-fired blackware has been made for centuries by pueblo artists. Black-on-black ware of the past century is produced with a smooth surface, with the designs applied through selective burnishing or the application of refractory slip. Another style involves carving or incising designs and selectively polishing the raised areas. For generations several families from Kha'po Owingeh and P'ohwhóge Owingeh pueblos have been making black-on-black ware with the techniques passed down from matriarch potters. Artists from other pueblos have also produced black-on-black ware. Several contemporary artists have created works honoring the pottery of their ancestors.",
        output:"Example Output: \nKeywords: Black-on-black ware, 20th century, 21st century, Puebloan Native American ceramic artists, Northern New Mexico, reduction-fired blackware, pueblo artists, selective burnishing, refractory slip, carving/incising designs, polishing"
    },
    3: {
        input: "Example Input: \nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",
        output:"Example Output: \nJupiter is the fifth planet from the Sun and is very big and bright. It can be seen with our eyes in the night sky and it has been known since ancient times. Its name comes from the Roman god Jupiter. It is usually the third brightest object in the night sky after the Moon and Venus."
    },
    4: {
        input: "Example Input: \nNikola Tesla and his contributions to technology",
        output:`Example Output:
        I. Introduction
        A. Who was Nikola Tesla?
        B. Overview of his contributions to technology
        
        II. Early Life and Education
        A. Where and when Tesla was born
        B. His education and early career
        
        III. Tesla's Contributions to Technology
        A. Alternating Current
        B. Radio and Remote Control
        C. Robotics
        D. X-Rays
        
        IV. Tesla's Later Years
        A. His later inventions
        B. His death and legacy
        
        V. Conclusion
        A. Summary of Tesla's life and accomplishments
        B. Impact of Tesla's work on modern technology`
    },
}

export const URLS = {
    1: "/grammar-correction",
    2: "/keywords-extraction",
    3: "/summarize",
    4: "/essay-outline"
}