import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import * as Styled from './styles';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useEffect, useMemo, useState } from 'react';
import { userReq } from '../../helpers/requestMethods';

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dez',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userReq.get('/users/stats');
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'Active User': item.total },
          ])
        );
      } catch (err) {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <Styled.Home>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <Styled.HomeWidgets className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </Styled.HomeWidgets>
    </Styled.Home>
  );
}
