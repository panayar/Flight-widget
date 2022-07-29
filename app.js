const tableBody = document.getElementById('table-body');


let flights = [
    {
        time: "8:11",
        destination: "OMAN",
        flight: "0X 203",
        gate: "A1",
        remarks: "ON TIME"
    }
    , {
        time: "12:00",
        destination: "BRAZIL",
        flight: "PZ 133",
        gate: "C2",
        remarks: "LATE"
    },
    {
        time: "15:00",
        destination: "KOREA",
        flight: "PZ 133",
        gate: "P10",
        remarks: "LATE"
    }
    ,
    {
        time: "8:11",
        destination: "OMAN",
        flight: "0X 203",
        gate: "A1",
        remarks: "ARRIVED"
    }
    , {
        time: "8:11",
        destination: "TEXAS",
        flight: "KJ 786",
        gate: "A1",
        remarks: "ON TIME"
    }
    , {
        time: "8:11",
        destination: "PARIS",
        flight: "58 203",
        gate: "F6",
        remarks: "ON TIME"
    }
    , {
        time: "8:11",
        destination: "TOKYO",
        flight: "LO 253",
        gate: "E4",
        remarks: "ON TIME"
    }
]


function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement('tr');

        for (const flightDetail in flight) {
            const tableCell = document.createElement('td');
            const word = Array.from(flight[flightDetail]);


            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement("div");

                setTimeout(() => {
                    letterElement.classList.add("flip");
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100 * index)

            }

            tableRow.append(tableCell);
        }

        tableBody.append(tableRow);
    }
}

populateTable()

