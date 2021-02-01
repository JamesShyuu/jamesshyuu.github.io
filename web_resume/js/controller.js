
function projDesignModalShow(key){
    if(key == 'lunchBox'){
        document.getElementById('projDesign_title').innerHTML = lunchBox.projDesign_title;
        document.getElementById('projDesign_img').src = lunchBox.projDesign_img;
        document.getElementById('projDesign_label1').innerHTML = lunchBox.projDesign_label1;
        document.getElementById('projDesign_duty1').innerHTML = lunchBox.projDesign_duty1;
        document.getElementById('projDesign_skill1').innerHTML = lunchBox.projDesign_skill1;
        document.getElementById('projDesign_skill2').innerHTML = lunchBox.projDesign_skill2;
        document.getElementById('projDesign_skill3').innerHTML = lunchBox.projDesign_skill3;
        document.getElementById('projDesign_descibe1').innerHTML = lunchBox.projDesign_descibe1;
        document.getElementById('projDesign_period1').innerHTML = lunchBox.projDesign_period1;
        document.getElementById('projDesign_url1').href = lunchBox.projDesign_url1;
        //document.getElementById('projModal_descibe2').innerHTML = lunchBox.projDesign_descibe2;
        document.getElementById('projModal_descibe3').innerHTML = lunchBox.projDesign_descibe3;
        document.getElementById('projModal_descibe4').innerHTML = lunchBox.projDesign_descibe4;
        document.getElementById('projModal_descibe5').innerHTML = lunchBox.projDesign_descibe5;
    } else if(key == 'travel'){
        document.getElementById('projDesign_title').innerHTML = travel.projDesign_title;
        document.getElementById('projDesign_img').src = travel.projDesign_img;
        document.getElementById('projDesign_label1').innerHTML = travel.projDesign_label1;
        document.getElementById('projDesign_duty1').innerHTML = travel.projDesign_duty1;
        document.getElementById('projDesign_skill1').innerHTML = travel.projDesign_skill1;
        document.getElementById('projDesign_skill2').innerHTML = travel.projDesign_skill2;
        document.getElementById('projDesign_skill3').innerHTML = travel.projDesign_skill3;
        document.getElementById('projDesign_descibe1').innerHTML = travel.projDesign_descibe1;
        document.getElementById('projDesign_period1').innerHTML = travel.projDesign_period1;
        document.getElementById('projDesign_url1').href = travel.projDesign_url1;
        //document.getElementById('projModal_descibe2').innerHTML = travel.projDesign_descibe2;
        document.getElementById('projModal_descibe3').innerHTML = travel.projDesign_descibe3;
        document.getElementById('projModal_descibe4').innerHTML = travel.projDesign_descibe4;
        document.getElementById('projModal_descibe5').innerHTML = travel.projDesign_descibe5;
    }
}