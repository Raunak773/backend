# Experiment 9: Programs using AJAX with HTML, XML and JSON data

## Aim
To fetch HTML, XML and JSON data from the server asynchronously using AJAX.

## Course Outcome
CO2

## Files
- `index.html`: page with three buttons and the AJAX code
- `snippet.html`: HTML fragment
- `data.xml`: XML data
- `data.json`: JSON data

## How to run
AJAX requests need a server (they fail on `file://`). Run `python3 -m http.server 8000` here and open http://localhost:8000.

## Concepts covered
- `XMLHttpRequest` and `readyState`
- Parsing XML with `responseXML`
- `fetch()` with `async`/`await` and `.json()`
- Updating the page without reloading

## Expected output
Each button loads its data into the page: an HTML snippet, or a list of students from XML or JSON.
