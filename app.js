particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 1,
                "color": "#ffffff"
            },
            "polygon": {
                "nb_sides": 6
            }
        },
        "opacity": {
            "value": 0.8,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.5,
                "opacity_min": 0.3,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 5,
                "sync": false
            }
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
            "speed": 5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 100,
                "size": 15,
                "duration": 2,
                "opacity": 1,
                "speed": 3
            }
        }
    },
    "retina_detect": true
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(() => {
    const particles = pJSDom[0].pJS.particles.array;
    particles.forEach(particle => {
        const randomColor = getRandomColor();
        particle.color.value = randomColor;
        particle.color.rgb = hexToRgb(randomColor);
        particle.color.hsl = null;
    });
}, 700);

document.addEventListener('DOMContentLoaded', (event) => {
    const particlesContainer = document.getElementById('particles-js');

    particlesContainer.addEventListener('mousemove', (event) => {
        const particles = pJSDom[0].pJS.particles.array;
        particles.forEach(particle => {
            const distance = Math.sqrt((event.clientX - particle.x) ** 2 + (event.clientY - particle.y) ** 2);
            if (distance < 15) {
                particle.radius_bubble = 15;
            } else {
                particle.radius_bubble = particle.radius;
            }
        });
    });
});

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
