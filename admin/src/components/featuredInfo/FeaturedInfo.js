import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { userReq } from '../../helpers/requestMethods';

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  // GET AND SET INCOME AND PERCENTAGE
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userReq.get('orders/income');
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  console.log('income', income);
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revanue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>{income[1]?.total}€</span>
          <span className='featuredMoneyRate'>
            {Math.floor(perc)}%
            {perc < 0 ? (
              <ArrowDownward className='featuredIcon negative' />
            ) : (
              <ArrowUpward className='featuredIcon positive' />
            )}
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span>YOU CAN PASS OTHER STUFF IN HERE</span>
      </div>
      <div className='featuredItem'>
        <span>YOU CAN PASS OTHER STUFF IN HERE</span>
      </div>
    </div>
  );
}
