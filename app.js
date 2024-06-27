const machines = [
    {
        name: "machine 1",
        lagas: [
            [838, 2298, 853, 595, 0, 0],
            [853, 838, 0, 0, 0, 0]
        ]
    },
    {
        name: "machine 2",
        lagas: [
            [837, 863, 662, 0, 1499, 1355],
            [862, 2544, 2417, 1276, 1500, 1499],
            [1499, 862, 2471, 1355, 1276, 0],
            [2544, 1624, 837, 1500, 863, 862]
        ]
    },
    {
        name: "machine 3",
        lagas: [
            [853, 1499, 595, 1624, 1523, 1366],
            [1523, 1499, 595, 1624, 2541, 1366],
            [2541, 2009, 1621, 853, 1707, 838],
            [2543, 2374, 602, 639, 2298, 645]
        ]
    },
    {
        name: "machine 4",
        lagas: [
            [839, 2300, 908, 647, 1351, 882],
            [1351, 883, 2545, 2547, 655, 882],
            [645, 841, 595, 597, 602, 1530],
            [1624, 560, 1499, 1428, 566, 839]
        ]
    },
    {
        name: "machine 9",
        lagas: [
            [1499, 2545, 2547, 1707, 2545, 2374],
            [2543, 2541, 2540, 639, 603, 2393]
        ]
    },
    {
        name: "machine 10",
        lagas: [
            [1366, 1621, 838, 839, 603, 0],
            [2374, 596, 2547, 1499, 2198, 492],
            [1366, 1621, 838, 839, 603, 2198],
            [1499, 2374, 492, 596, 2540, 1500]
        ]
    },
    {
        name: "machine 11",
        lagas: [
            [908, 884, 1112, 1366, 2009, 639],
            [2198, 2164, 2374, 1274, 553, 1492],
            [2374, 908, 884, 553, 2009, 1274],
            [1492, 1316, 1112, 1499, 639, 2164]
        ]
    },
    {
        name: "machine 12",
        lagas: [
            [1112, 2391, 2545, 2424, 1530, 2547],
            [837, 561, 2544, 1355, 1357, 2439],
            [1112, 2547, 2424, 2545, 2544, 2391],
            [646, 2439, 2393, 1357, 1530, 561]
        ]
    },
    {
        name: "machine 13",
        lagas: [
            [1499, 2393, 1620, 2394, 1530, 2547],
            [1530, 1386, 1492, 2393, 1624, 908],
            [1505, 2547, 2471, 1499, 2394, 645],
            [1620, 1355, 1624, 2393, 2545, 170061]
        ]
    },
    {
        name: "machine 14",
        lagas: [
            [1355, 1621, 560, 595, 2300, 2009],
            [908, 838, 2298, 603, 2544, 597]
            [603, 908, 597, 2544, 2300, 2009],
            [1039, 1275, 1366, 1316, 908, 1355],
        ]
    },
    {
        name: "machine 15",
        lagas: [
            [2543, 2541, 2374, 1366, 853, 853],
            [1621, 2541, 2374, 2543, 170070, 2298],
            [1523, 2374, 2543, 1621, 2541, 1499],
            [2374, 2543, 1621, 2541, 2545, 1523]
        ]
    },
    {
        name: "machine 16",
        lagas: [
            [1706, 1568, 1530, 662, 852, 600],
            [572, 2298, 2538, 1530, 2198, 1623]
        ]
    },
    {
        name: "machine 17",
        lagas: [
            [2393, 2543, 2394, 598, 603, 1366],
            [2056, 2298, 1538, 595, 840, 1707]
        ]
    },
    {
        name: "machine 18",
        lagas: [
            [2471, 603, 561, 2391, 884, 1112],
            [561, 645, 1112, 1499, 1222, 1355],
            [2471, 1357, 884, 2391, 561, 1499],
            [1112, 1112, 1355, 640, 645, 603]
        ]
    },
    {
        name: "machine 21",
        lagas: [
            [1501, 600, 1275, 1621, 887, 2316],
            [2056, 534, 1366, 2374, 2540, 625]
        ]
    },
    {
        name: "machine 22",
        lagas: [
            [0, 553, 2393, 2543, 561, 853],
            [2358, 2399, 2111, 1597, 2029, 2028]
        ]
    },
    {
        name: "machine 23",
        lagas: [
            [1713, 2389, 1597, 0, 0, 0],
            [2358, 2400, 2399, 2536, 2111, 1597],
            [2028, 2536, 2029, 2389, 1731, 2400],
            [2358, 2399, 2111, 1597, 2029, 2028]
        ]
    },
    {
        name: "machine 24",
        lagas: [
            [0, 0, 0, 0, 0, 0],
            [0, 2541, 2399, 0, 0, 0],
            [2358, 1597, 863, 2400, 2536, 2399],
            [2536, 863, 2400, 2541, 1597, 2358]
        ]
    },
    {
        name: "machine 25",
        lagas: [
            [492, 638, 1274, 595, 2540, 2541],
            [2544, 2056, 1492, 1523, 853, 676],
            [1274, 2540, 1523, 2595, 2544, 2056],
            [853, 638, 1492, 2009, 676, 652]
        ]
    },
    {
        name: "machine 26",
        lagas: [
            [1112, 643, 561, 1112, 840, 0],
            [1112, 840, 676, 2540, 839, 553],
            [553, 1316, 1112, 840, 839, 2540],
            [561, 643, 676, 1112, 840, 1316]
        ]
    },
    {
        name: "machine 27",
        lagas: [
            [0, 0, 0, 0, 0, 0],
            [884, 908, 1499, 1623, 884, 0],
            [1499, 908, 1366, 2298, 2198, 839],
            [1316, 2298, 2198, 839, 1621, 884]
        ]
    },
    {
        name: "machine 28",
        lagas: [
            [634, 1351, 0, 0, 0, 0],
            [170070, 634, 1351, 658, 648, 1278],
            [1278, 2527, 170070, 882, 648, 634],
            [658, 1351, 634, 2547, 882, 1278]
        ]
    },
    {
        name: "machine 29",
        lagas: [
            [1623, 1707, 1499, 2540, 639, 2198],
            [1366, 1366, 1707, 2543, 2542, 2541],
            [2009, 2543, 1707, 1355, 2198, 2540],
            [1623, 2542, 2541, 1499, 639, 1707]
        ]
    },
    {
        name: "machine 30",
        lagas: [
            [1499, 645, 1499, 1504, 2544, 1499],
            [1357, 2544, 1504, 1499, 645, 1357],
            [603, 1504, 1500, 602, 837, 1544],
            [560, 884, 645, 839, 1623, 1357]
        ]
    },
    {
        name: "machine 31",
        lagas: [
            [2009, 853, 603, 2298, 853, 839, 2358, 1426],
            [2392, 170061, 2391, 1499, 598, 837],
            [2547, 640, 603, 1357, 645, 1504]
        ]
    },
    {
        name: "machine 32",
        lagas: [
            [625, 1366, 602, 654, 2391, 650, 863],
            [0, 0, 0, 0, 0, 0],
            [1366, 1357, 2391, 1357, 0, 0]
        ]
    },
    {
        name: "machine 33",
        lagas: [
            [841, 1502, 1277, 649, 883, 0],
            [637, 1491, 1428, 714, 647, 675],
            [1428, 1491, 675, 637, 714, 142],
            [841, 1277, 647, 649, 1502, 883]
        ]
    },
    {
        name: "machine 34",
        lagas: [
            [1491, 637, 563, 1502, 641, 562],
            [556, 1502, 655, 2551, 714, 675],
            [841, 617, 1502, 714, 563, 562],
            [1491, 675, 655, 1502, 556, 2551]
        ]
    },
    {
        name: "machine 35",
        lagas: [
            [960, 637, 566, 142, 1120, 655],
            [2171, 1277, 2551, 649, 647, 656],
            [1120, 647, 883, 649, 656, 2418],
            [566, 655, 960, 2418, 637, 883]
        ]
    },
    {
        name: "machine 49",
        lagas: [
            [0, 2527, 1491, 1351, 1278, 1161],
            [563, 2543, 634, 648, 656, 882]
        ]
    },
    {
        name: "machine 54",
        lagas: [
            [1501, 1624, 2300, 2298, 2358, 1621],
            [2547, 2056, 2374, 2536, 2540, 2541]
        ]
    }
];
var allContacts = [];
var obj = {};
// function repeatingContacts(){
//     let x = 0;
//     machines.forEach(machine => {
//         machine['lagas'].forEach(table => {
//             for (let i = 0; i < table.length; i++){
//                 allContacts[x] = table[i];
//                 x++;
//             }
//         })
//     })
function repeatingContacts() {
    let x = 0;
    machines.forEach(machine => {
        machine['lagas'].forEach(table => {
            for (let i = 0; i < table.length; i++) {
                allContacts[x] = table[i];
                x++;
            }
        });
    });

    for (let i = 0; i < allContacts.length; i++) {
        let value = allContacts[i];
        obj[value] = obj[value] ? obj[value] + 1 : 1;
    }

    // Sort the contacts by frequency
    let sortedContacts = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    // Display the sorted contacts
    console.log("Sorted Contacts:");
    sortedContacts.forEach(contact => {
        console.log(`${contact[0]} : ${contact[1]}`);
    });


    for(let i = 0; i < allContacts.length; i++){
        let value = allContacts[i];
        obj[value] = obj[value] ? obj[value] + 1 : 1;
    }
    console.log(obj);
}


function addref(){
    machines.forEach(machine => {
        machine['lagas'].forEach(table => {
            for (let i = 0; i < table.length; i++){
                table[i] += 910000000;
                console.log(table[i]);
            }
        });
    });
}

function createMachine(machine) {
    const div = document.createElement("div");
    div.classList.add("machine");

    const h2 = document.createElement("h2");
    h2.innerText = machine.name;
    div.appendChild(h2);

    const machineX = document.createElement("div");
    machineX.classList.add("machineX");

    machine.lagas.forEach((laga, index) => {
        const table = document.createElement("table");

        const headerRow = document.createElement("tr");
        const headerCell = document.createElement("th");
        headerCell.innerText = `Laga ${index + 1}`;
        headerRow.appendChild(headerCell);
        table.appendChild(headerRow);

        laga.forEach(contact => {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.innerText = contact;
            row.appendChild(cell);
            table.appendChild(row);
        });

        machineX.appendChild(table);
    });

    div.appendChild(machineX);
    document.getElementById("machine-container").appendChild(div);
}

function search() {
    const searchValue = document.getElementById("search").value;
    const machines = document.querySelectorAll(".machine");
    let count = 0;

    machines.forEach(machine => {
        const tables = machine.getElementsByTagName("table");
        let hasHighlight = false;

        for (let i = 0; i < tables.length; i++) {
            const rows = tables[i].getElementsByTagName("tr");

            for (let j = 1; j < rows.length; j++) { // Skip header row
                const cells = rows[j].getElementsByTagName("td");

                if (cells[0].innerText == searchValue) {
                    rows[j].classList.add("highlight");
                    hasHighlight = true;
                    count++;
                } else {
                    rows[j].classList.remove("highlight");
                }
            }
        }

        if (hasHighlight) {
            machine.style.display = "";
        } else {
            machine.style.display = "none";
        }
    });

    document.getElementById("search-result").innerText = `${searchValue} appears ${count} times.`;
}

repeatingContacts();
// addref();
machines.forEach(machine => createMachine(machine));

// showing the contacts and how many times they repeat in the lagas
console.log("object keys = " + Object.keys(obj).length);
console.log("how many cell are there = " + allContacts.length);
console.log("cells / the existing contacts = " + allContacts.length/Object.keys(obj).length);

