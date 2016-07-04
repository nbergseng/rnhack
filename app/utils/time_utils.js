import moment from 'moment';
import 'moment-duration-format'; // TODO probably can rewrite this mo betta easy enough

export function formattedDuration(startTime, endTime) {
  return moment.duration(moment(startTime).diff(endTime)).format('w[w] d[d] h[h] m[m]');
}
