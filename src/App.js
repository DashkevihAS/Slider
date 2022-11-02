import Slider from './components/Slider/Slider';

function App() {
  const images = [
    'https://tourism.krd.ru/upload/iblock/0fc/0fc99d129cd93608fc3c04686c24c8dc.jpg',
    'https://tourism.krd.ru/upload/iblock/aaf/aaf0ea6aa9b11149d78edefc864f5ff8.jpg',
  ];
  return (
    <div className='App'>
      <div className='slider__wrapper'>
        <Slider items={images} />
      </div>
    </div>
  );
}

export default App;
