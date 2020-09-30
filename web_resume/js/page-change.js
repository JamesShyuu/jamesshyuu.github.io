function pageChange(pageIndex){
    let indexNav = document.getElementById('index-nav');
    let uiuxNav = document.getElementById('uiux-nav');
    let photoNav = document.getElementById('photograph-nav');
    let designNav = document.getElementById('design-nav');
    let indexNavSmall = document.getElementById('index-nav-small');
    let uiuxNavSmall = document.getElementById('uiux-nav-small');
    let photoNavSmall = document.getElementById('photograph-nav-small');
    let designNavSmall = document.getElementById('design-nav-small');

    let indexBanner = document.getElementById('cc');
    let uiuxBanner = document.getElementById('uiux-banner');
    let photoBanner = document.getElementById('photo-banner');
    let designBanner = document.getElementById('design-banner');

    if(pageIndex == '0'){
        indexNav.style.display = 'block';
        uiuxNav.style.display = 'none';
        photoNav.style.display = 'none';
        designNav.style.display = 'none';
        indexNavSmall.style.display = 'block';
        uiuxNavSmall.style.display = 'none';
        photoNavSmall.style.display = 'none';
        designNavSmall.style.display = 'none';
    }else if(pageIndex == '1'){
        indexNav.style.display = 'none';
        uiuxNav.style.display = 'block';
        photoNav.style.display = 'none';
        designNav.style.display = 'none';
        indexNavSmall.style.display = 'none';
        uiuxNavSmall.style.display = 'block';
        photoNavSmall.style.display = 'none';
        designNavSmall.style.display = 'none';
    }else if(pageIndex=='2'){
        indexNav.style.display = 'none';
        uiuxNav.style.display = 'none';
        photoNav.style.display = 'block';
        designNav.style.display = 'none';
        indexNavSmall.style.display = 'none';
        uiuxNavSmall.style.display = 'none';
        photoNavSmall.style.display = 'block';
        designNavSmall.style.display = 'none';
    }else if(pageIndex=='3'){
        indexNav.style.display = 'none';
        uiuxNav.style.display = 'none';
        photoNav.style.display = 'none';
        designNav.style.display = 'block';
        indexNavSmall.style.display = 'none';
        uiuxNavSmall.style.display = 'none';
        photoNavSmall.style.display = 'none';
        designNavSmall.style.display = 'block';
    }

}