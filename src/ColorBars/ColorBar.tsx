import {FC} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const ColorBar: FC<{
	color: string;
	index: number;
	reverse?: boolean;
}> = ({color, index, reverse}) => {
	const {width} = useVideoConfig();
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 3], reverse ? [1, 0] : [0, 1], {
		extrapolateRight: 'clamp',
	});

	const barHeight = 50;
	const barWidth = width / 5;
	const barLeft = barWidth * index;

	return (
		<div
			style={{
				opacity,
				backgroundColor: color,
				width: barWidth,
				height: barHeight,
				left: barLeft,
				position: 'fixed',
			}}
		/>
	);
};
