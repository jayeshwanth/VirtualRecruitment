
function getSession() {
    console.log("arrived here here  sending further")
    location.href="StreamLiv"
}

function startSession(val){
    console.log("arrived here to start session  sending further")
    location.href="StreamLiv?company="+val
}

function getNext(val){
    if(val!="") {
        console.log("arrived here to start session  sending further " + val)
        location.href = "selectUser"
    }
}

function createPresenter(){
    //alert("comes here");
        location.href = "presenter"
}

function createStudent(){
        location.href = "student"
}