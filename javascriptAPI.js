async function obtenerAPI1()
    {
        const respuestaAPI1 = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    
        const fecha = respuestaAPI1.json();
    
        return fecha;
    }
    
        function cambiarProof_FechaAPI(cAPI1)
    {
            document.getElementById("FechaApi1").innerHTML = cAPI1.time.updated;
            document.getElementById("btcpriceid").innerHTML = cAPI1.bpi.USD.rate_float + " " +cAPI1.bpi.USD.description;
    }
    
    obtenerAPI1().then(cambiarProof_FechaAPI);