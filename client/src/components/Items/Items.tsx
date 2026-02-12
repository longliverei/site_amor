import './Items.css';

function Items() {

    const products = [
        {
            id: 1,
            name: 'Produto 1',
            price: 10.00,
            image: 'https://placehold.co/300x400'
        },
        {
            id: 2,
            name: 'Produto 2',
            price: 20.00,
            image: 'https://placehold.co/300x400'
        },
        {
            id: 3,
            name: 'Produto 3',
            price: 30.00,
            image: 'https://placehold.co/300x400'
        },
        {
            id: 4,
            name: 'Produto 4',
            price: 40.00,
            image: 'https://placehold.co/300x400'
        },
        {
            id: 5,
            name: 'Produto 5',
            price: 50.00,
            image: 'https://placehold.co/300x400'
        },
        {
            id: 6,
            name: 'Produto 6',
            price: 60.00,
            image: 'https://placehold.co/300x400'
        }
    ];

  return (
    <div className='items'>
        <div className='items-container'>
            {products.map(product => (
                <div key={product.id} className='item'>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Items;