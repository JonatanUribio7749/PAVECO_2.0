// Obtenemos el contexto del canvas
const ctx = document.getElementById('impactoBachesChart').getContext('2d');

// Creamos el gráfico
new Chart(ctx, {
    type: 'pie', // Tipo de gráfico: Pie Chart
    data: {
        labels: [
            'Daños en el vehículo',
            'Retrasos en el transporte',
            'Inseguridad vial',
            'Aumento del estrés',
            'Otros'
        ],
        datasets: [{
            label: 'Impacto de los baches',
            data: [38.1, 9.5, 38.1, 14.3, 0], // Datos proporcionados
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)', // Azul
                'rgba(255, 99, 132, 0.8)', // Rojo
                'rgba(255, 206, 86, 0.8)', // Amarillo
                'rgba(75, 192, 192, 0.8)', // Verde
                'rgba(153, 102, 255, 0.8)'  // Morado
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'right'
            },
            title: {
                display: true,
                text: '¿Cómo impactan los baches en tu vida diaria?',
                font: {
                    size: 18
                }
            }
        }
    }
});
