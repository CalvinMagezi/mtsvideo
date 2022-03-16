import {
	Img,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Audio,
} from 'remotion';
import {ColorBars} from './ColorBars';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const {durationInFrames} = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div
			style={{
				flex: 1,
				backgroundImage:
					'url(https://res.cloudinary.com/magezi-tech-solutions/image/upload/v1647428328/personal%20pictures/header_uqwepv.png)',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Audio src={require('./drumroll.mp3')} />
			<ColorBars />
			<Sequence from={6 * 3} name="Logo">
				<Img
					style={{
						position: 'absolute',
						bottom: '40%',
						width: '700px',
						height: '500px',
						left: '37%',
						marginLeft: '-100px',
					}}
					src={require('./images/Final logo-02.png')}
				/>
			</Sequence>
			<div style={{opacity}}>
				<Sequence from={50}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={transitionStart + 50}>
					<Subtitle />
				</Sequence>
			</div>
		</div>
	);
};
