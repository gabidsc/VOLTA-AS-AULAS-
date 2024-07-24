//Mensagem de boas-vindas ao clicar no botão 
document.addEventListener('DOMContentLoaded',() =>{
    const button=document.querySelector('button');
    button.addEventListener('click',()=>{
        alert('Estamos animados para começar o ano com vocês!');
    
});
//Contador de dias para o início das aulas
const startDate=new Date ('2024-08-01');//defina a data de inicio das aulas
const today=new Date ();
const timeDiff=startDate-today;
const daysLeft=Math.ceil(timeDiff/(100*60*60*24)));

const countdownElement=document.createElement('p');
countdownElement.textContent= 'Faltam ${daysLeft} dias para o início das aulas!';
document.querySelector('.card').appendChild(countdownElement);
//Alterar a imagem ao clicar 
const imge=document.querySelector('img');
image.addEventListener('click'()=>{
    image.src=voltaaulas.jpg;
});
//Mostrar uma mensagem de boas-vindas com animação 
const card=document.querySelector('card');
card.style.opacity=D;
card.style.transition='opacity2s';

setTimet(()=>{
    card.style.opacity=1:
},100);
});