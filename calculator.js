var csvContent = '';

    function calculate() {
        var rent = parseFloat(document.getElementById('rent').value);
        var insurance = parseFloat(document.getElementById('insurance').value);
        var utilities = parseFloat(document.getElementById('utilities').value);
        var investment = parseFloat(document.getElementById('investment').value);
        var equity = parseFloat(document.getElementById('equity').value);

        if (isNaN(rent) || isNaN(insurance) || isNaN(utilities) || isNaN(investment) || isNaN(equity)) {
            document.getElementById('result').innerHTML = "Please enter valid numbers";
            return;
        }

        var totalCashOutflow = rent + insurance + utilities;
        var totalCashInflow = investment + equity;
        var netCashOutflow = totalCashOutflow - totalCashInflow;

        document.getElementById('result3').innerHTML = "Total Cash Outflow: $" + totalCashOutflow.toFixed(2);
        document.getElementById('result2').innerHTML = "Total Cash Inflow: $" + totalCashInflow.toFixed(2);
        document.getElementById('result1').innerHTML = "Net Cash Outflow: $" + netCashOutflow.toFixed(2);

        csvContent += "Monthly Rent,$" + rent + "\n";
        csvContent += "Rental Insurance,$" + insurance + "\n";
        csvContent += "Utilities,$" + utilities + "\n";
        csvContent += "Investment Earnings,$" + investment + "\n";
        csvContent += "Equity Built,$" + equity + "\n";
        csvContent += "Total Cash Outflow,$" + totalCashOutflow.toFixed(2) + "\n";
        csvContent += "Total Cash Inflow,$" + totalCashInflow.toFixed(2) + "\n";
        csvContent += "Net Cash Outflow,$" + netCashOutflow.toFixed(2) + "\n";
    }

    function viewDocument() {
        var csvData = csvContent.replace(/,/g, '\t'); // Replace commas with tabs for better readability
        var newWindow = window.open('', '_blank');
        newWindow.document.write('<pre>' + csvData + '</pre>');
        newWindow.document.close();
    }

    function downloadDocument() {
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", 'data:text/csv;charset=utf-8,' + encodedUri);
        link.setAttribute("download", "renting_parameters.csv");
        document.body.appendChild(link);

        link.click(); // Trigger the download
    }