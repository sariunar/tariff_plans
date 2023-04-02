import './App.css';
import React from 'react';
import '../TariffCard/Tariff.css'
import Tariff from '../TariffCard/Tariff';

const tariffPlans = [
  { name: "Безлимитный 300", price: "300", speed: "до 10 Мбит/сек", description: "Объем включенного трафика не ограничен" },
  { name: "Безлимитный 450", price: "450", speed: "до 50 Мбит/сек", description: "Объем включенного трафика не ограничен" },
  { name: "Безлимитный 550", price: "550", speed: "до 100 Мбит/сек", description: "Объем включенного трафика не ограничен", isSelected: true },
  { name: "Безлимитный 1000", price: "1000", speed: "до 200 Мбит/сек", description: "Объем включенного трафика не ограничен" }
];
class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          {
            tariffPlans.map((tariff) =>
              <Tariff name={tariff.name} price={tariff.price} speed={tariff.speed} description={tariff.description} isSelected={tariff.isSelected} />
            ) // вставляются данные из json как в массиве
          }
        </div>
      </>
    );
  }
}
export default App;