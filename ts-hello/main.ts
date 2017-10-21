import {Point} from './point';
import {LikeComponent} from './like.component';


const point = new Point(1, 3);
point.draw();

const component = new LikeComponent(10, true);
component.onclick();
console.log(`Likes conunt: ${component.likeCount}, isSelected: ${component.isSelected}`);
