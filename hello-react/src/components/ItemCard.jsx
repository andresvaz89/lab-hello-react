import img1 from '../images/icon1.png';
import img2 from '../images/icon2.png';
import img3 from '../images/icon3.png';
import img4 from '../images/icon4.png';
import './ItemCard.css';

const cardList = [
  {
    img: img1,
    title: 'Declarative',
    description: ' React makes it painless to creative interactive UIs.'
  },
  {
    img: img2,
    title: 'Components',
    description: ' React makes it painless to creative interactive UIs.'
  },
  {
    img: img3,
    title: 'Single-Way',
    description: ' React makes it painless to creative interactive UIs.'
  },
  {
    img: img4,
    title: 'JSX',
    description: ' React makes it painless to creative interactive UIs.'
  }
];

const ItemCard = () => {
  // El componente debe recibir props
  return (
    <div className="item-container">
      {cardList.map((item, index) => (
        <div className="single-item-container" key={index}>
          <img src={item.img} alt="" />
          <h2>{item.title}</h2>
          <p className="item-p">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
