import logo from './logo.svg';
import './App.css';
import Store from './pages/store'

function App() {

  const products = [
    {
        'id' : '1',
        'name': 'Jabba the Huff',
        'type': 'Cartridge',
        'desc': 'Test',
        'rating': 4,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'id' : '2',
        'name': 'Tugg Nuggets',
        'type': 'Gummy',
        'desc': 'Test',
        'rating': 5,
        'options':['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'false', 
            'salePrice':'2.5',
            'current':'5',
        },
        'favorite': 'false',
    },
    {
        'id' : '3',
        'name': 'Han Smoke-lo',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 4,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
      
        'id' : '4',
        'name': 'Ghost Train Haze',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'id' : '5',
        'name': 'Strawberry Banana',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'id' : '6',
        'name': 'Boss Nugg',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'id' : '7',
        'name': 'Billy Dank Williams',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'id' : '8',
        'name': 'Luke Highwalker',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'id' : '9',
        'name': 'Dank Vader',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'id' : '10',
        'name': 'Billy Dank Williams',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
]
    console.log(`App.js: ${products}`)
  return (
    <Store data={products}/>
  );
}

export default App;
