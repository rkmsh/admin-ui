var trafficchart = document.getElementById("trafficflow");
var ghd_issues = document.getElementById("ghd");
var attend = document.getElementById("attendance");

var myChart1 = new Chart(trafficchart, {
    type: 'line',
    data: {
        labels: ['8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
        datasets: [{
            backgroundColor: "rgba(48, 164, 255, 0.5)",
            borderColor: "rgba(48, 164, 255, 0.8)",
            data: ['1135', '1135', '1140', '1168', '1150', '1145', '1155', '1155', '1150', '1160', '1185', '1190'],
            label: '',
            fill: true
        }]
    },
    options: {
        responsive: true,
        title: { display: false, text: 'Chart' },
        legend: { position: 'top', display: false, },
        tooltips: { mode: 'index', intersect: false, },
        hover: { mode: 'nearest', intersect: true },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Hourly Update'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Visitors'
                }
            }]
        }
    }
});

var myChart2 = new Chart(ghd_issues, {
    type: 'bar',
    data: {
        labels: ['Raised', 'Resolved', 'Pending'],
        datasets: [{
            label: 'Income',
            backgroundColor: "rgba(76, 175, 80, 0.5)",
            borderColor: "#6da252",
            borderWidth: 1,
            data: ["3128", "2000", "1128"],
        }]
    },
    options: {
        responsive: true,
        title: { display: false, text: 'Chart' },
        legend: { position: 'top', display: false, },
        tooltips: { mode: 'index', intersect: false, },
        hover: { mode: 'nearest', intersect: true },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Status'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Issues'
                }
            }]
        }
    }
});

var myChart3 = new Chart(attend, {
    type: 'pie',
    data: {
        labels: ["Present", "Absent"],
        datasets: [{
            data: ["80", "20"],
            backgroundColor: ["#009688", "#795548"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: { display: true, fullWidth: true, position: 'right', },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) { total += allData[i]; }
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});
