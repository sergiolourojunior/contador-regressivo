particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
            },
            "opacity": {
                "value": 0.5,
                "random": false,
            },
            "size": {
                "value": 3,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                },
            }
        },
        "retina_detect": true
    }
);

// Função para obter parâmetros da URL
function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Obtém os parâmetros 'frase' e 'data' da URL
const frase = getParameterByName('frase') || '';
const dataParam = getParameterByName('data') || '';

// Valida e analisa a data
const targetDate = new Date(dataParam);

if (isNaN(targetDate)) {
    document.getElementById('message').textContent = 'Data inválida.';
    document.getElementById('countdown').style.display = 'none';
} else {
    function updateCountdown() {
        const now = new Date();
        let diff = targetDate - now;

        if (diff <= 0) {
            document.getElementById('message').textContent = 'O evento já ocorreu.';
            document.getElementById('countdown').style.display = 'none';
            clearInterval(intervalId);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);

        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);

        const minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);

        const seconds = Math.floor(diff / 1000);

        // Atualiza os elementos do DOM
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        // Atualiza a mensagem
        document.getElementById('message').textContent = `para ${frase}`;
    }

    // Chamada inicial e intervalo de atualização
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
}

const shareButton = document.getElementById('shareButton');
shareButton.addEventListener('click', async () => {
    const shareData = {
        title: 'Contagem Regressiva',
        text: `Confira esta contagem regressiva para ${frase}!`,
        url: window.location.href
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
            console.log('Conteúdo compartilhado com sucesso');
        } catch (err) {
            console.error('Erro ao compartilhar:', err);
        }
    } else {
        // Fallback para navegadores que não suportam o Web Share API
        alert('Compartilhamento não suportado neste navegador. Copie o link: ' + window.location.href);
    }
});

const createButton = document.getElementById('createButton');
const createModal = document.getElementById('createModal');
const cancelButton = document.getElementById('cancelButton');
const generateButton = document.getElementById('generateButton');
const inputFrase = document.getElementById('inputFrase');
const inputData = document.getElementById('inputData');
const linkContainer = document.getElementById('linkContainer');
const generatedLink = document.getElementById('generatedLink');
const copyLinkButton = document.getElementById('copyLinkButton');

createButton.addEventListener('click', () => {
    createModal.style.display = 'flex';
});

cancelButton.addEventListener('click', () => {
    createModal.style.display = 'none';
    linkContainer.classList.add('hidden');
    inputFrase.value = '';
    inputData.value = '';
});

generateButton.addEventListener('click', () => {
    const fraseValue = inputFrase.value.trim();
    const dataValue = inputData.value;

    if (!fraseValue || !dataValue) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.append('frase', fraseValue);
    url.searchParams.append('data', dataValue);

    generatedLink.href = url.toString();
    generatedLink.textContent = url.toString();
    linkContainer.classList.remove('hidden');
});

copyLinkButton.addEventListener('click', () => {
    navigator.clipboard.writeText(generatedLink.href).then(() => {
        alert('Link copiado para a área de transferência!');
    }, (err) => {
        alert('Erro ao copiar o link: ', err);
    });
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === createModal) {
        createModal.style.display = 'none';
        linkContainer.classList.add('hidden');
        inputFrase.value = '';
        inputData.value = '';
    }
});

const addCalendarButton = document.getElementById('addCalendarButton');
addCalendarButton.addEventListener('click', () => {
    if (!frase || !dataParam) {
        alert('Frase ou data inválida para criar o evento.');
        return;
    }

    const startDate = new Date(dataParam);
    const endDate = new Date(startDate.getTime() + (60 * 60 * 1000)); // Evento de 1 hora

    const eventUrl = window.location.href;

    const startDateUTC = startDate.toISOString().replace(/-|:|\.\d\d\d/g,"");
    const endDateUTC = endDate.toISOString().replace(/-|:|\.\d\d\d/g,"");

    const calUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(frase)}&dates=${startDateUTC}/${endDateUTC}&details=Este%20evento%20foi%20criado%20a%20partir%20do%20site: ${encodeURIComponent(eventUrl)}. Entre no link e acompanhe a contagem regressiva.`;

    window.open(calUrl, '_blank');
});