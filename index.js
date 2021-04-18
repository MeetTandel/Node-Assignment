const http = require('http');
const url = require("url");
const fs = require("fs");
const getAgeFile = require("./routes/ageCalculation");
const getAreaFile = require("./routes/areaCalculation");

http.createServer(function (req, res) {
    const path = req.url;
    const query = url.parse(path, true).query;
    
    if (path.includes("/age")) {
        const name = query.name;
        const dateToString = `${query.year}/${query.month}/${query.date}`
        const age = getAgeFile.getAge(dateToString, name, res);

    }
    else if (path.includes("/vegetables")){
        //dirname will give the file path of current directory.
        const filepath = `${__dirname}/data/vegetables.json`;
        console.log(__dirname);

        fs.readFile(filepath, function(err, data){
            if(err){
                res.writeHead(404, { "Content-Type": "text/html" });
                return res.end("404 Not Found");
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(data);
            res.end();
        });
    }
    else if (path.includes("/metrics")) {
        let type = query.metric;
        let radius = query.radius;
        let object = query.object;
        let result;

        if(type === "volume"){
            result = getAreaFile.volumeOfSphere(radius);
        }
        else if(type === "area"){
            result = getAreaFile.areaOfCirle(radius);
        }
        else if(type === "surfaceArea"){
            result = getAreaFile.surfaceAreaOfSphere(radius);
        }

        res.setHeader("Content-Type", "text/html");
        res.write(`${type} of ${object} is ${result.toFixed(2)}`);
        res.end();
    }
    else {
        res.write("Hello World!");
        res.end();
    }
}).listen(8080);