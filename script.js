// Write your JavaScript code here!
   function init()
   {
      const faultyItems = document.getElementById("faultyItems");
      const launchStatus = document.getElementById("launchStatus");
      const fuelStatus = document.getElementById("fuelStatus");
      const cargoStatus = document.getElementById("cargoStatus");
      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus  = document.getElementById("copilotStatus");
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let form = document.querySelector("form");
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) 
      {
         response.json().then( function(json) 
         {
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
				  <h2>Mission Destination</h2>
					<ol>
						<li>Name: ${json[4].name}</li>
						<li>Diameter: ${json[4].diameter}</li>
						<li>Star: ${json[4].star}</li>
						<li>Distance from Earth: ${json[4].distance}</li>
						<li>Number of Moons: ${json[4].moons}</li>
					</ol>
						<img src="${json[4].image}">
				`;
			});
	   });
	  
      form.addEventListener("submit", function(event) 
      {
         event.preventDefault();
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" ) 
         {
            alert("All fields are required!");
         }  
         
         else if(!isNaN(pilotName.value))
         {
            alert("Please make sure to enter valid information for the pilot field");
         } 

         else if(!isNaN(copilotName.value))
         {
            alert("Please make sure to enter valid information for the co-pilot field");
         } 

         else if( isNaN(fuelLevel.value))
         {
            alert("Please make sure to enter valid information for the fuel-level field");
         }

         else if( isNaN(cargoMass.value))
         {
            alert("Please make sure to enter valid information for the cargo mass field");
         }    
         else
         {
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch!`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch!`;
         
            if (fuelLevel.value<10000)
            {
               faultyItems.style.visibility = "visible" ;
               fuelStatus.innerHTML = "There is not enough fuel for the journey."
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "red";
            }

            else if(cargoMass.value>10000)
            {
               faultyItems.style.visibility = "visible" ;
               cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
               launchStatus.innerHTML ="Shuttle not ready for launch";
               launchStatus.style.color = "red";
            }
         
            else 
            {
               faultyItems.style.visibility = "visible" ;
               launchStatus.innerHTML ="Shuttle is ready for launch!";
               launchStatus.style.color = "green";
            }
         }
      });
   }
   
window.addEventListener("load", init);


