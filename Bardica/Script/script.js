let bar = document.getElementById('searchBar');
let brand = document.getElementById('brand');
let connectivity = document.getElementById('connectivity');
let magnifier = document.getElementById('magnifier');
let navigation = document.getElementById('navbar');
bar.addEventListener('focus', function(){
    brand.style.display = 'none';
    connectivity.style.display = 'none';
    navigation.style.display = 'none';
    bar.style.width ='100vw'
    bar.style.border = '1px solid #FF0000'
    bar.style.backgroundColor ='#282828'
    magnifier.style.display ='none'
    document.getElementsByName('buscar')[0].placeholder='Busca tu música'
    bar.style.color ='#fff'
});

bar.addEventListener('blur', function(){
    brand.style.display = 'flex';
    connectivity.style.display = 'flex';
    navigation.style.display = 'flex';
    bar.style.width = '4rem'
    magnifier.style.display ='inline'
    bar.style.backgroundColor ='transparent'
    bar.style.border = 'none'
    document.getElementsByName('buscar')[0].placeholder='Buscar'
    bar.style.color ='#282828'
    bar.style.transition ='0s'
});
