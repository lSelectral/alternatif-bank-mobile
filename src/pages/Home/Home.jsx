import './Home.scss';
import TopBar from '../../components/TopBar/TopBar'
import RegisterBottom from '../../components/RegisterBottom/RegisterBottom'
import PieChartComponent from '../../components/PieChartComponent/PieChartComponent';
import {balanceData} from '../../data'

const Home = () => {
  return (
    <div className='home'>
      <TopBar isLogin={false}/>
      <PieChartComponent/>

      <div className="asset-status">
        <div className="asset">
          <span className="asset-title">VARLIKLAR</span>
          <span className="asset-value">88.603,06 TL</span>
        </div>
        <div className="asset secondary">
          <span className="asset-title">BORÇLAR</span>
          <span className="asset-value">135,47 TL</span>
        </div>
      </div>

      <div className='balance'>
        {balanceData.map((info) => (
          <div className='balance' key={info.title}>
            <div className="balance-row-header">
              <span className="row-header-title">{info.title}</span>
            </div>
            <div className="balance-row-values">
                <span className="values-header">{info.subtitle}</span>
                <span className="values-value">{info.value}</span>
            </div>
          </div>
        ))}
      </div>

      <RegisterBottom isLogin={false}/>
    </div>
  )
}

export default Home