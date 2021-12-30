let clicks = 0

let clickValue = 1

let clickbuffcost = 10

function leclicke() {
    clicks = clicks + clickValue;
        if(clicks === 420) {
            document.getElementById("clickslol").textContent = "cash money: " + clicks + " also nice 420"; 
        } else {
            document.getElementById("clickslol").textContent = "cash money: " + clicks; 
    }

    
}

function upgradeClickValue() {
    if (clicks >= clickbuffcost) {
    clicks = clicks - clickbuffcost;
    clickValue = clickValue + 1;
    
    if(clicks === 420) {
        document.getElementById("clickslol").textContent = "cash money: " + clicks + " also nice 420"; 
    } else {
        document.getElementById("clickslol").textContent = "cash money: " + clicks; 
    }
    clickbuffcost = clickbuffcost + clickbuffcost;
    document.getElementById("clickBuffCost").textContent = "make cash money button STRONGER! (currently the cost of this upgrade is " + clickbuffcost + ")"; 
}
}


