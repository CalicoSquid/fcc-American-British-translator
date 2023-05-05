
const translateHandler = async () => {
  
  const textArea = document.getElementById("bubble");
  const localeArea = document.getElementById("locale-select");
  const errorArea = document.getElementById("error-msg");
  const translatedArea = document.getElementById("translated-sentence");
  
  
  const stuff = {"text": textArea.textContent, "locale": localeArea.value};
  
  errorArea.innerText = "";
  translatedArea.innerText = "";

  const data = await fetch("/api/translate", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(stuff)
  });

  const parsed = await data.json();
  if (parsed.error) {
    errorArea.innerText = JSON.stringify(parsed);
    return;
  }

  translatedArea.innerHTML = parsed.translation;
  return;



};

const styleHandler = () => {
  let locale = document.getElementById("locale-select").value;
  const header = document.getElementById('header');
  const headerText = document.getElementById('header-text')
  const usa = document.getElementById('usa');
  const uk = document.getElementById('uk')
  const nigel = document.getElementById('nigel')
  const george = document.getElementById('george')
  const ukExamples = document.getElementById('b2a-examples') 
  const usaExamples = document.getElementById('a2b-examples') 

  if (locale === 'american-to-british') {
    headerText.innerHTML = 'American to Brit Translator'
    usa.style.width = '100%';
    uk.style.width = '0%';
    header.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png')"
    george.style.opacity = '100%'
    nigel.style.opacity = '0%'
    ukExamples.style.display = 'none';
    usaExamples.style.display = 'block';
  } else {
    headerText.innerHTML = 'British to Yank Translator'
    usa.style.width = '0%';
    uk.style.width = '100%';
    header.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png')"
    george.style.opacity = '0%'
    nigel.style.opacity = '100%'
    ukExamples.style.display = 'block';
    usaExamples.style.display = 'none';
  }
}

document.getElementById("translate-btn").addEventListener("click", translateHandler)
document.getElementById("locale-select").addEventListener("change", styleHandler)