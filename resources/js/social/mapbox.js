const runs = document.getElementsByClassName("runs");

async function getAccessToken() {
    return await fetch('/token')
        .then(response => response.json())
        .then(data => {
            return data['access_token']
        });
}

function initCallAPI(accessToken, method = "GET", body = undefined) {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${accessToken}`);
    return {
        method: method,
        headers: headers,
        mode: 'cors',
        cache: 'default',
        body: body
    };
}

if (runs.length > 0) {
    let accessToken = "";
    let selectedRunId = runs[0].getAttribute("runId");
    const maps = document.getElementById('maps');
    const listRuns = document.getElementById("runs");
    let layersId = [];
    let sourceId = [];
    async function getRun(runId) {
        await getAccessToken()
            .then(res => accessToken = res);
        return await fetch(`${window.apiDomain}user/me/run/${runId}/checkpoint`, initCallAPI(accessToken))
            .then(response => response.json())
            .then(data => {
                return data
            });
    }

    maps.setAttribute("runId", selectedRunId);

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoiZnJlbmNocXdlcnR5IiwiYSI6ImNqeTFjcDU3bzBibmgzbnBjMGs0amNleDMifQ.px-Nyv49yuKgQjkn9DVu_g';
    const map = new mapboxgl.Map({
        container: 'maps', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [7.269583, 43.697845], // starting position [lng, lat]
        zoom: 5 // starting zoom
    });

    map.on('load', function () {
        map.loadImage('/img/start-marker.png', function (error, image) {
            if (error) throw error;
            map.addImage("start-marker", image);
        });
        map.loadImage('/img/checkpoint-marker.png', function (error, image) {
            if (error) throw error;
            map.addImage("checkpoint-marker", image);
        });
        map.loadImage('/img/arrival-marker.png', function (error, image) {
            if (error) throw error;
            map.addImage("arrival-marker", image);
        });
    });

    function clearLayers() {
        for (let i = 0; layersId[i]; i++)
            if (map.getLayer(layersId[i]))
                map.removeLayer(layersId[i]);
        for (let i = 0; sourceId[i]; i++)
            if (map.getSource(sourceId[i]))
                map.removeSource(sourceId[i]);
    }

    listRuns.onclick = (async (ev) => {
        let target = getEventTarget(ev);
        let run = {};
        maps.setAttribute("runId", target.getAttribute("runId"));
        await getRun(target.getAttribute("runId")).then(res => run = res);
        map.flyTo({
            center: [
                run.data[0].location.coordinates[0][0][0],
                run.data[1].location.coordinates[0][0][1]
            ],
            zoom: 15
        });
        clearLayers();
        drawRun(run.data);
    });

    function drawPoint(lng, lat, id, type) {
        layersId.push(id);
        sourceId.push('point' + id);
        map.addSource('point' + id, {
            type: "geojson",
            data: {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: "Point",
                            coordinates: [lng, lat]
                        }
                    }
                ]
            }
        });
        map.addLayer({
            id: id,
            type: "symbol",
            source: 'point' + id,
            layout: {
                'icon-image': type
            }
        });
    }

    function drawLineBetweenPoints(points) {
        layersId.push('route');
        sourceId.push('routeSource');
        map.addSource('routeSource', {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": points
                }
            }
        });
        map.addLayer({
            "id": "route",
            "type": "line",
            "source": "routeSource",
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#888",
                "line-width": 8
            }
        });
    }

    function drawRun(run) {
        let points = [];
        for (let i = 0; run[i]; i++) {
            if (run[i]['type'] === 'start')
                drawPoint(run[i].location.coordinates[0][0][0],
                    run[i].location.coordinates[0][0][1],
                    run[i]['id'], 'start-marker');
            else if (run[i]['type'] === 'arrival')
                drawPoint(run[i].location.coordinates[0][0][0],
                    run[i].location.coordinates[0][0][1],
                    run[i]['id'], 'arrival-marker');
            else
                drawPoint(run[i].location.coordinates[0][0][0],
                    run[i].location.coordinates[0][0][1],
                    run[i]['id'], 'checkpoint-marker');
            points.push(run[i].location.coordinates[0][0]);
        }
        drawLineBetweenPoints(points);
    }
}
