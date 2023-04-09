import './App.css';
import React from 'react';
import '../TariffCard/Tariff.css'
import Tariff from '../TariffCard/Tariff';

const tariffPlans = [
  { id: 1, name: "Безлимитный 300", price: "300", speed: "до 10 Мбит/сек", description: "Объем включенного трафика не ограничен" },
  { id: 2, name: "Безлимитный 450", price: "450", speed: "до 50 Мбит/сек", description: "Объем включенного трафика не ограничен" },
  { id: 3, name: "Безлимитный 550", price: "550", speed: "до 100 Мбит/сек", description: "Объем включенного трафика не ограничен" },
  { id: 4, name: "Безлимитный 1000", price: "1000", speed: "до 200 Мбит/сек", description: "Объем включенного трафика не ограничен" }
];
class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          {
            tariffPlans.map((tariff) =>
              <Tariff key={tariff.id} name={tariff.name} price={tariff.price} speed={tariff.speed} description={tariff.description} isSelected={tariff.isSelected} />
            ) // вставляются данные из json как в массиве
          }
        </div>
      </>
    );
  }
}
export default App;