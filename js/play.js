startVariables();

retrieveConfigData();
configEvents();

retrieveUIData();
UIEvents();

if(getTablero() === ""){
    construyeTabla($tableSize.value);
}else{
    retrieveTabla();
}

playSound($mainTheme);