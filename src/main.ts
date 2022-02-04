import './style.css'
import Image from '/assets/img/test.png?w=400&h=300&webp'
console.log(Image);
(document.getElementById('js-insert') as HTMLImageElement).src = Image;

