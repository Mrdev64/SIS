const features = document.getElementById("feature_container");
const company = document.getElementById("company_container");
let featopened = false;
let comopened = false;
const openFeatures = ()=>{
    if(comopened){
        opencom()
    }
    document.getElementById("features").classList.toggle("visible");
    featopened = !featopened;
}
const opencom = ()=>{
    if(featopened){
        openFeatures()
    }
    document.getElementById("company").classList.toggle("visible");
    comopened= !comopened;
}


features.addEventListener("click",openFeatures);
company.addEventListener("click",opencom);
