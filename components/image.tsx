
import css from './image.module.scss';

interface iView {pic: string, show: boolean, close: () => void}
interface iImage {img: string, view?: () => void}

export function View(props: iView)
{
	return <div className={props.show ? css.show : css.hide} onClick={props.close}>
		<img src={'http://asuprog.ru/img/' + props.pic} style={{height: '100%', margin: '0 auto'}} />
	</div>
}

export function Image(props: iImage)
{
	const path = 'http://asuprog.ru/img/' + props.img;

	return !props.view ? <img src={path} alt={props.img} style={{height: 107, marginRight: 10}} />
		: props.img === 'new.png' ?
		<img src={path} style={{float: 'right', marginLeft: 20, cursor: 'pointer'}}
			title="Увеличить" onClick={props.view} />
		:
		<img src={path} style={{marginRight: 5, cursor: 'pointer'}}
			title="Увеличить" onClick={props.view} />
}
