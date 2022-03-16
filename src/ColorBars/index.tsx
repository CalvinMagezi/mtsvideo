import {FC, Fragment} from 'react';
import {Sequence, useVideoConfig} from 'remotion';
import {ColorBar} from './ColorBar';
import {brown, rust, pink, orange, green} from './colors';

export const ColorBars: FC = () => {
	const colors = [brown, rust, pink, orange, green];
	const {durationInFrames} = useVideoConfig();
	const startOfEnd = 33;

	return (
		<>
			{colors.map((color, index) => (
				<Fragment key={color}>
					<Sequence
						durationInFrames={durationInFrames - index * 5}
						from={index * 3}
					>
						<ColorBar key={color} color={color} index={index} />
					</Sequence>
					<Sequence
						durationInFrames={(index + 1) * 3}
						from={durationInFrames - 33 + index * 3}
					>
						<ColorBar key={color} reverse color={color} index={index} />
					</Sequence>
				</Fragment>
			))}
		</>
	);
};
