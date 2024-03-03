import { TableHeader } from './header';
import { Row }  from './row';
import { style } from './table.style';

export function Table() {

    const now = new Date();
    const monthLastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const monthDays = Array.from({ length: monthLastDay }, (_, i) => i + 1);

    return (
        <div>
        <table style={style.table}>
          <TableHeader />
          <tbody>
            {monthDays.map((day) => (
                <Row day={day}/>
            ))}
          </tbody>
        </table>
      </div>
    )
}